using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi_Kiyanaz.Models
{
    public class JWTSettings
    {
        public string Key { get; set; }
        public double DurationInMinutes { get; set; }
    }
}
