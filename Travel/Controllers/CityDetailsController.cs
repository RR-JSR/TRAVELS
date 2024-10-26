using Microsoft.AspNetCore.Mvc;
using Travel.Handler;
using Travel.InterfaceHandler;

namespace Travel.Controllers
{
    [Route("city")]
    public class CityDetailsController : Controller
    {
        ICityDetailsHandler _ICityDetailsHandler;
        public CityDetailsController(ICityDetailsHandler ICityDetailsHandler)
        {
            _ICityDetailsHandler = ICityDetailsHandler; 
        }
        [HttpGet]
        [Route("fetch_city_details")]
        public IActionResult FetchCityDetails()
        {
            var data = _ICityDetailsHandler.FetchCityDetails();
            return Ok(data);
        }
    }
}
