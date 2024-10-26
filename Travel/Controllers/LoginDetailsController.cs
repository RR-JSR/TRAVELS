using Microsoft.AspNetCore.Mvc;
using Travel.Handler;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Controllers
{
    [Route("login")]
    public class LoginDetailsController : Controller
    {
        ILoginDetailsHandler _ILoginDetailsHandler;
        public LoginDetailsController(ILoginDetailsHandler ILoginDetailsHandler)
        {
            _ILoginDetailsHandler = ILoginDetailsHandler;
        }
        [HttpPost]
        [Route("add_login_details")]
        public IActionResult AddLoginDeatils( [FromBody] LoginDetails obj)
        {
            bool result = false;
            result = _ILoginDetailsHandler.AddLoginDeatils(obj);
            if (result == true)
            {
                return Ok("User Created");
            }
            return BadRequest("User Not Created");
        }
        [HttpGet]
        [Route("search_loginid/{fname}/{id}/{psd}")]
        public IActionResult Login( [FromRoute] string fname,int id,string psd)
        {
            bool result = false;
            result=_ILoginDetailsHandler.FetchId(fname,id,psd);
            if (result == true)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
