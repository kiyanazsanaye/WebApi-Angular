using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi_Kiyanaz.Models
{
    public class Aircraft
    {
        [Key]
        public int? Id { get; set; }
        public string ModelName { get; set; }
        public string SerialNumber { get; set; }
        public string RegistrationNumber { get; set; }
        public bool RegistrationStatus { get; set; }
        public DateTime? RegistrationDate { get; set; }
    }
}
