using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi_Kiyanaz.Models;

namespace WebApi_Kiyanaz.Repository
{
    public interface IAircraftRepository
    {
        Task<IEnumerable<Aircraft>> GetAircraft();
        Task<Aircraft> GetAircraftById(int Id);
        Task<Aircraft> InsertAircraft(Aircraft objAircraft);
        Task<Aircraft> UpdateAircraft(Aircraft objAircraft);
        Task<bool> DeleteAircraftById(int Id);
    }
}
