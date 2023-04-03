using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi_Kiyanaz.Models;
using WebApi_Kiyanaz.Service;
using Microsoft.AspNetCore.Authorization;

namespace WebApi_Kiyanaz.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AircraftController : Controller
    {
        private readonly IWebHostEnvironment _env;
        private readonly IAircraftService _aircraft;
        public AircraftController(IWebHostEnvironment env, IAircraftService aircraft)
        {
            _env = env;
            _aircraft = aircraft ?? throw new ArgumentNullException(nameof(aircraft));
        }

        [HttpGet]
        [Route("aircrafts")]//GetAllAircrafts
        public async Task<IActionResult> Get()
        {
            return Ok(await _aircraft.GetAircraft());
        }

        [HttpGet]
        [Route("aircrafts/{Id}")]//GetAircraftById
        public async Task<IActionResult> Get(int Id)
        {
            return Ok(await _aircraft.GetAircraftById(Id));
        }

        [HttpPost]
        [Route("aircrafts")]//AddAircraft
        public async Task<IActionResult> Post(Aircraft obj)
        {
            obj.RegistrationDate = DateTime.Now;
            var result = await _aircraft.InsertAircraft(obj);
            if (result == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Sorry, there is a problem");
            }

            return Ok(Json(string.Format("This Aircraft model: ({0}) Added Successfully", obj.ModelName)));
        }


        [HttpPut]
        [Route("aircrafts")]//UpdateAircraft
        public async Task<IActionResult> Put(Aircraft obj)
        {
            var result = await _aircraft.UpdateAircraft(obj);
            if (result == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Sorry, there is a problem");
            }
            return Ok(Json(string.Format("This Aircraft model: ({0}) Updated Successfully", obj.ModelName)));
        }


        [HttpDelete("aircrafts/{id}")]
        public async Task<bool> Delete(int id)//JsonResult
        {
            if (id == 1)// never delete first item!
                return false;
            var result = await _aircraft.DeleteAircraftById(id);
            //return new JsonResult("Deleted Successfully");
            return result;
        }


    }
}
