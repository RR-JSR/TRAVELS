using Microsoft.AspNetCore.Mvc;
using Travel.Database;
using Travel.InterfaceHandler;

namespace Travel.Controllers
{
    [Route("country")]
    public class CountryDetailsController : Controller
    {
        ICountryDetailsHandler _ICountryDetailsHandler;
        public CountryDetailsController(ICountryDetailsHandler ICountryDetailsHandler)
        {
            _ICountryDetailsHandler = ICountryDetailsHandler;
        }
        [HttpGet]
        [Route("fetch_country_details")]
        public IActionResult FetchCountryDetails()
        {
            var data = _ICountryDetailsHandler.FetchCountryDetails();
            return Ok(data);
        }
    }
}
