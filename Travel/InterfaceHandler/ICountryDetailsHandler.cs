using Travel.Models;

namespace Travel.InterfaceHandler
{
    public interface ICountryDetailsHandler
    {
        List<CountryDetails> FetchCountryDetails();
    }
}
