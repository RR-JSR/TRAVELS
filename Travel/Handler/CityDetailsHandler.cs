using Travel.Database;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Handler
{
    public class CityDetailsHandler: ICityDetailsHandler
    {
        TravelDbContext _TravelDbContext;
        public CityDetailsHandler(TravelDbContext travelDbContext)
        {

            _TravelDbContext = travelDbContext;

        }
        public List<CityDetails> FetchCityDetails()
        {
            var list = _TravelDbContext.CityDetails.ToList();
            return list;
        }
    }
}
