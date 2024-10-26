using Travel.Database;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Handler
{
    public class PersonalDetailsHandler: IPersonalDetailsHandler
    {
        TravelDbContext _TravelDbContext;
        public PersonalDetailsHandler(TravelDbContext travelDbContext)
        {

            _TravelDbContext = travelDbContext;

        }
        public bool AddPersonalDeatils(PersonalDetails obj)
        {
            _TravelDbContext.PersonalDetails.Add(obj);
            _TravelDbContext.SaveChanges();
            return true;
        }
        public int FetchIDCount()
        {
            int count = 1;
            var result =_TravelDbContext.PersonalDetails.ToList();
            foreach (var item in result)
            {
                count++;
            } 
            return count;
        }
    }
}
