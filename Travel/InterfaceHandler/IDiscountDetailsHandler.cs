using Travel.Models;

namespace Travel.InterfaceHandler
{
    public interface IDiscountDetailsHandler
    {
        List<DiscountDetails> FetchDiscountDetails();
    }
}
