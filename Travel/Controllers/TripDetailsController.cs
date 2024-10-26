using Microsoft.AspNetCore.Mvc;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Controllers
{
    [Route("trip")]
    public class TripDetailsController : Controller
    {
        ITripDetailsHandler _ItripDetailsHandler;
        public TripDetailsController(ITripDetailsHandler ItripDetailsHandler)
        {
            _ItripDetailsHandler = ItripDetailsHandler;
        }
        [HttpGet]
        [Route("fetch_last_trip/{id}")]
        public IActionResult FetchLastTrip([FromRoute]int id)
        {
            bool exsit=false;
            exsit = _ItripDetailsHandler.FetchLastTripID(id);
            if (exsit == true) 
            {
                var data = _ItripDetailsHandler.FetchLastTrip(id);
                return Ok(data);
            }
            return BadRequest("No Record Found");   
        }
        [HttpPost]
        [Route("add_new_trip")]
        public IActionResult AddNewTrip([FromBody] TripDetails obj)
        {
            bool result=false;
            result=_ItripDetailsHandler.AddNewTrip(obj);
            if (result == true)
            {
                return Ok("Trip Addded");
            }
            return BadRequest("Failed to add Trip");
        }
        [HttpGet]
        [Route("fetch_trip_count")]
        public IActionResult FetchTripCount() 
        {
            int count = _ItripDetailsHandler.FetchTripCount();
            return Ok(count);
        }
        
    }
}
