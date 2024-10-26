using System.Collections.Generic;
using Travel.Models;
namespace Travel.InterfaceHandler
{
    public interface ILoginDetailsHandler
    {
        
        public bool AddLoginDeatils(LoginDetails obj);
        public bool FetchId(string fname,int id,string psd);
    } 
}

