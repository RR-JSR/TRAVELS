using Microsoft.EntityFrameworkCore;
using Travel.Database;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Handler
{
    public class TripDetailsHandler: ITripDetailsHandler
    {
        TravelDbContext _TravelDbContext;
        public TripDetailsHandler(TravelDbContext travelDbContext)
        {

            _TravelDbContext = travelDbContext; 

        }
        public List<TripDetails> FetchLastTrip(int TripId)
        {
            var lasttripList = _TravelDbContext.TripDetails.ToList();
            List<TripDetails> lastTrip = new List<TripDetails>();
            foreach (var item in lasttripList) 
            { 
                if (item.TripId == TripId)
                {
                    lastTrip.Add(item);
                }
            }
            return lastTrip;
        }
        public bool FetchLastTripID(int TripId)
        {
            var lasttripList = _TravelDbContext.TripDetails.ToList();
            bool result = false;
            foreach (var item in lasttripList)
            {
                if (item.TripId == TripId)
                {
                    result=true;
                }
            }
            return result;
        }
        public bool AddNewTrip(TripDetails dto)
        {
            _TravelDbContext.TripDetails.Add(dto);
            _TravelDbContext.SaveChanges();
            return true;
        }
        public int FetchTripCount()
        {
            int count = 1001;
            var data=_TravelDbContext.TripDetails.ToList();
            foreach (var item in data) 
            {
                count++;
            }
            return count;
        }
    }
}
