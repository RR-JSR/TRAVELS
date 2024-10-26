using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Mysqlx;
using Travel.Database;
using Travel.InterfaceHandler;
using Travel.Models;

namespace Travel.Handler
{
    public class CountryDetailsHandler : ICountryDetailsHandler
    {
        TravelDbContext _TravelDbContext;
        public CountryDetailsHandler(TravelDbContext travelDbContext)
        {

            _TravelDbContext = travelDbContext;

        }
        public List<CountryDetails> FetchCountryDetails()
        {
            var list=_TravelDbContext.CountryDetails.ToList();
            return list;
        }


    }
}
