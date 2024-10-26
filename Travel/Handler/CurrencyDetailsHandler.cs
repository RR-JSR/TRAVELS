using Travel.Database;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Handler
{
    public class CurrencyDetailsHandler : ICurrencyDetailsHandler
    {
        TravelDbContext _TravelDbContext;
        public CurrencyDetailsHandler(TravelDbContext travelDbContext)
        {

            _TravelDbContext = travelDbContext;

        }
        public List<CurrencyDetails> FetchCurrencyDetails()
        {
            var list = _TravelDbContext.CurrencyDetails.ToList();
            return list;
        }
    }
}
