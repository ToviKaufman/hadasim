using BL.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface ILocationService
    {
        Task<bool> AddLocation(DeviceLocationDTO dto);
        Task <List<LocationDTO>> GetAll();
    }
}
