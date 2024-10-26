using Travel.Models;

namespace Travel.InterfaceHandler
{
    public interface ICurrencyDetailsHandler
    {
        List<CurrencyDetails> FetchCurrencyDetails();
    }
}
