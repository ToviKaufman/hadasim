using BL.DTOs;
using BL.Hubs;
using BL.Mappers;
using DAL.Repositories;
using Microsoft.AspNetCore.SignalR;

namespace BL.Services
{
    public class LocationService : ILocationService
    {
        private readonly IHubContext<LocationHub> _hubContext;
        private readonly IStudentService _studentService;
        private readonly ITeacherService _teacheService;
        private readonly ILocationRepo _repo;

     
        public LocationService(ILocationRepo repo,IStudentService studentService, ITeacherService teacheService, IHubContext<LocationHub> hubContext)
        {
            _repo = repo;
            _studentService = studentService;
            _teacheService = teacheService;

            _hubContext = hubContext;
        }

        private static double ConvertToDecimal(DmsDTO dms)
        {
            return dms.Degrees + (dms.Minutes / 60.0) + (dms.Seconds / 3600.0);
        }

        public async Task<bool> AddLocation(DeviceLocationDTO dto)
        {
            var student = await _studentService.GetById(dto.ID);
            if (student == null)
            {
                var teacher = await _teacheService.GetById(dto.ID);
                if (teacher == null)
                    return false;
            }

            var lat = ConvertToDecimal(dto.Coordinates.Latitude);
            var lng = ConvertToDecimal(dto.Coordinates.Longitude);

            var location = new LocationDTO()
            {
                ID = dto.ID,
                Latitude = lat,
                Longitude = lng,
                Time = dto.Time
            };

            await _repo.RemoveByIdNumber(dto.ID);
            await _repo.AddLocation(location.ToEntity());
            

            await _hubContext.Clients.All.SendAsync("ReceiveLocation", location);

            return true;
        }

        public async Task<List<LocationDTO>> GetAll()
        {

            var locations = await _repo.GetAll();
            return locations.Select(item => item.ToDto()).ToList();
        }
    }
}
