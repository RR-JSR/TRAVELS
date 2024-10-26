using Travel.Database;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Handler
{
    public class DiscountDetailsHandler : IDiscountDetailsHandler
    {
        TravelDbContext _TravelDbContext;
        public DiscountDetailsHandler(TravelDbContext travelDbContext)
        {

            _TravelDbContext = travelDbContext;

        }
        public List<DiscountDetails> FetchDiscountDetails()
        {
            var list = _TravelDbContext.DiscountDetails.ToList();
            return list;
        }
    }
}
