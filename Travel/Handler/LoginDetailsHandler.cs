using Travel.Database;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Handler
{
    public class LoginDetailsHandler: ILoginDetailsHandler
    {
        TravelDbContext _TravelDbContext;
        public LoginDetailsHandler(TravelDbContext TravelDbContext)
        {
            _TravelDbContext= TravelDbContext;
        } 
        
        public bool AddLoginDeatils(LoginDetails obj)
        {
            _TravelDbContext.LoginDetails.Add(obj);
            _TravelDbContext.SaveChanges();
            return true;
        }
        public bool FetchId(string fname, int id, string psd)
        {
            var data=_TravelDbContext.LoginDetails.ToList();
            bool result = false;
            foreach (var item in data)
            {
                if(id == item.Id & psd == item.Psd & fname == item.Fname)
                {
                    result = true;
                }
            }
            return result;

        }
    }
}
