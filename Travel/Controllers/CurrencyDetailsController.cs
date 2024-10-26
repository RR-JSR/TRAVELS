using Microsoft.AspNetCore.Mvc;
using Travel.Handler;
using Travel.InterfaceHandler;

namespace Travel.Controllers
{
    [Route("currency")]
    public class CurrencyDetailsController : Controller
    {
        ICurrencyDetailsHandler _ICurrencyDetailsHandler;
        public CurrencyDetailsController(ICurrencyDetailsHandler ICurrencyDetailsHandler)
        {
            _ICurrencyDetailsHandler = ICurrencyDetailsHandler;
        }
        [HttpGet]
        [Route("fetch_currency_details")]
        public IActionResult FetchCcuuencyDetails()
        {
            var data = _ICurrencyDetailsHandler.FetchCurrencyDetails();
            return Ok(data);
        }
    }
}
