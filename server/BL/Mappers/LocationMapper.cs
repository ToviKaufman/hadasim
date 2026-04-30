using BL.DTOs;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Mappers
{
    internal static class LocationMapper
    {

        internal static LocationDTO ToDto(this Location location)
        {
            return new LocationDTO()
            {
                ID = location.IdNumber,
                Latitude = location.Latitude,
                Longitude = location.Longitude,
                Time= location.Time,
            };
        }
        internal static Location ToEntity(this LocationDTO location)
        {
            return new Location()
            {
                IdNumber = location.ID,
                Latitude = location.Latitude,
                Longitude = location.Longitude,
                Time = location.Time,
            };
        }
    }
}
