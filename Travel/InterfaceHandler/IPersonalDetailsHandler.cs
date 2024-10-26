using Travel.Models;

namespace Travel.InterfaceHandler
{
    public interface IPersonalDetailsHandler
    {
        public bool AddPersonalDeatils(PersonalDetails obj);
        public int FetchIDCount();
    }
}
