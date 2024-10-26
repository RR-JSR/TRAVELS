using Microsoft.AspNetCore.Mvc;
using Travel.Handler;
using Travel.InterfaceHandler;

namespace Travel.Controllers
{
    [Route("discount")]
    public class DiscountDetailsController : Controller
    {
        IDiscountDetailsHandler _IDiscountDetailsHandler;
        public DiscountDetailsController(IDiscountDetailsHandler IDiscountDetailsHandler)
        {
            _IDiscountDetailsHandler = IDiscountDetailsHandler;
        }
        [HttpGet]
        [Route("fetch_discount_details")]
        public IActionResult FetchDiscountDetails()
        {
            var data = _IDiscountDetailsHandler.FetchDiscountDetails();
            return Ok(data);
        }
    }
}
