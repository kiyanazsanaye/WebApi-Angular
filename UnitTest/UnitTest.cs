using Microsoft.AspNetCore.Hosting;
using Moq;
using System;
using System.Collections.Generic;
using WebApi_Kiyanaz.Controllers;
using WebApi_Kiyanaz.Models;
using WebApi_Kiyanaz.Service;
using Xunit;
using System.Linq;

namespace UnitTest
{
    public class UnitTest
    {
        private readonly Mock<IAircraftService> _service;
        private readonly IWebHostEnvironment _env;
        private readonly IAircraftService _aircraft;
        public UnitTest()
        {
            _service = new Mock<IAircraftService>();
        }

        [Fact]
        public async void TestGetById()
        {
            //var result = await _service.GetAircraftById(1);
            //Assert.Equal(1, result.Id); 
            _service.Setup(x => x.GetAircraftById(1).Result).Returns(data.FirstOrDefault());
            //var result = _service.Setup(x => x.GetAircraftById(1)); Assert.NotNull(result);//OK
        }
        [Fact]
        public async void TestGet()
        {
            //_service.Setup(x => x.GetAircraft().Result.ToList().Count()).Returns(data.Count());//get count of aircrafts
            var obj = _service.Setup(x => x.GetAircraftById(1).Result);
           
            var objController = new AircraftController(_env, _service.Object);
            var Result = objController.Get().Result;
            

            Assert.NotNull(Result);
        }
        [Fact]
        public async void TestDelete()
        {
            var result = _service.Setup(x => x.DeleteAircraftById(1));
            var obj = _service.Setup(x => x.GetAircraftById(1).Result);
            Assert.NotNull(obj);// this means cannot delete first item of db as I mentioned before!
        }

        List<Aircraft> data = new List<Aircraft>()
        {
        new Aircraft{Id = 1, ModelName = "Kiyanaz-a-2039-7089", SerialNumber = "120398573SS234", RegistrationNumber = "123", RegistrationStatus = true,RegistrationDate=DateTime.Parse("2023-03-23 15:15:00")},
        };

    }
}
