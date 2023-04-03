using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi_Kiyanaz.Infrastructure;
using WebApi_Kiyanaz.Models;

namespace WebApi_Kiyanaz.Repository
{
    public class AircraftRepository : IAircraftRepository
    {
        public readonly APIDbContext _db;
        private readonly ILogger _logger;
        public AircraftRepository(APIDbContext context, ILogger<AircraftRepository> logger)
        {
            _db = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger;
        }
        public async Task<IEnumerable<Aircraft>> GetAircraft()
        {
            try
            {
                return await _db.Aircrafts.ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in repository layer GetAircraft() Method at {DT} - Details: ", DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
        }
        public async Task<Aircraft> GetAircraftById(int Id)
        {
            try
            {
                return await _db.Aircrafts.FindAsync(Id);
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in repository layer GetAircraftById({Id}) Method at {DT} - Details: ", Id, DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
        }
        public async Task<Aircraft> InsertAircraft(Aircraft objAircraft)
        {
            _db.Aircrafts.Add(objAircraft);
            try
            {
                await _db.SaveChangesAsync();

            }
            catch (Exception ex)
            {
                _logger.LogError("Error in repository layer InsertAircraft(Aircraft) Method at {DT} - Details: ", DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
            return objAircraft;
        }
        public async Task<Aircraft> UpdateAircraft(Aircraft objAircraft)
        {
            try
            {
                _db.Entry(objAircraft).State = EntityState.Modified;
                await _db.SaveChangesAsync();
                return objAircraft;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in repository layer UpdateAircraft(Aircraft) Method at {DT} - Details: ", DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
        }
        public async Task<bool> DeleteAircraftById(int Id)
        {
            try
            {
                bool res = false;
                var obj = _db.Aircrafts.Find(Id);
                if (obj != null)
                {
                    _db.Entry(obj).State = EntityState.Deleted;
                    await _db.SaveChangesAsync();
                    res = true;
                }
                return res;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in repository layer DeleteAircraftById({Id}) Method at {DT} - Details: ", Id, DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
        }
    }
}
