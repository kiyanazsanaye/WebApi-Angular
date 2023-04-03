using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi_Kiyanaz.Infrastructure;
using WebApi_Kiyanaz.Models;
using WebApi_Kiyanaz.Repository;

namespace WebApi_Kiyanaz.Service
{
    public class AircraftService : IAircraftService
    {
        public readonly IAircraftRepository _repo;
        private readonly ILogger _logger;
        public AircraftService(IAircraftRepository repository, ILogger<AircraftService> logger)
        {
            _repo = repository;
            _logger = logger;
        }
        public async Task<IEnumerable<Aircraft>> GetAircraft()
        {
            try
            {
                return await _repo.GetAircraft();
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in servise layer GetAircraft() Method at {DT} - Details: ", DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
        }

        public async Task<Aircraft> GetAircraftById(int Id)
        {
            try
            {
                return await _repo.GetAircraftById(Id);
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in servise layer GetAircraftById({Id}) Method at {DT} - Details: ", Id, DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
        }
        public async Task<Aircraft> InsertAircraft(Aircraft objAircraft)
        {
            try
            {
                await _repo.InsertAircraft(objAircraft);

            }
            catch (Exception ex)
            {
                _logger.LogError("Error in servise layer InsertAircraft(Aircraft) Method at {DT} - Details: ", DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
            return objAircraft;
        }
        public async Task<Aircraft> UpdateAircraft(Aircraft objAircraft)
        {
            try
            {
                await _repo.UpdateAircraft(objAircraft);
                return objAircraft;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in servise layer UpdateAircraft(Aircraft) Method at {DT} - Details: ", DateTime.UtcNow.ToLongTimeString(), ex);
                throw;
            }
        }
        public async Task<bool> DeleteAircraftById(int Id)
        {
            bool res = false;
            try
            {
                res = await _repo.DeleteAircraftById(Id);
                return res;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error in servise layer DeleteAircraftById({Id}) Method at {DT} - Details: ", Id, DateTime.UtcNow.ToLongTimeString(), ex);
                return res;
            }
        }
    }
}
