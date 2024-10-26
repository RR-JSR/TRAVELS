using Travel.Models;

namespace Travel.InterfaceHandler
{
    public interface ICityDetailsHandler
    {
        List<CityDetails> FetchCityDetails();
    }
}
