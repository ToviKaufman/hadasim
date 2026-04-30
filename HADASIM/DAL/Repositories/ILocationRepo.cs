using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public interface ILocationRepo
    {
        Task AddLocation(Location location);
        Task RemoveByIdNumber(string idNumber);
        Task<List<Location>> GetAll();
    }
}
