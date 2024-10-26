using Travel.Models;

namespace Travel.InterfaceHandler
{
    public interface ITripDetailsHandler
    {
        List<TripDetails> FetchLastTrip(int TripId);
        bool FetchLastTripID(int TripId);
        bool AddNewTrip(TripDetails obj);
        int FetchTripCount();
    }
}
