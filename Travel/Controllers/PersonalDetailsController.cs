using Microsoft.AspNetCore.Mvc;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Controllers
{
    [Route("personal")]
    public class PersonalDetailsController : Controller
    {
        IPersonalDetailsHandler _IpersonalDetailsHandler;
        public PersonalDetailsController(IPersonalDetailsHandler IpersonalDetailsHandler)
        {
            _IpersonalDetailsHandler= IpersonalDetailsHandler;
        }
        [HttpGet]
        [Route("fetch_total_count_of_ids")]
        public IActionResult FetchIdCount()
        { 
            int count=_IpersonalDetailsHandler.FetchIDCount();
            return Ok(count);
        }

        [HttpPost]
        [Route("add_personal_details")]
        public IActionResult AddPersonalDeatils([FromBody] PersonalDetails obj)
        {
            bool result = false;
            result=_IpersonalDetailsHandler.AddPersonalDeatils(obj);
            if (result == true)
            {
                return Ok("User Created");
            }
            return BadRequest("User Not Created");
        }
    }
}
