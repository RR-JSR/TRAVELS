using Microsoft.EntityFrameworkCore;
using Travel.Database;
using Travel.Handler;
using Travel.InterfaceHandler;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<TravelDbContext>(option =>
option.UseMySql(builder.Configuration.GetConnectionString("travelDbConnect"), ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("travelDbConnect"))));

builder.Services.AddScoped<ILoginDetailsHandler, LoginDetailsHandler>();
builder.Services.AddScoped<IPersonalDetailsHandler, PersonalDetailsHandler>();
builder.Services.AddScoped<ICityDetailsHandler, CityDetailsHandler>();
builder.Services.AddScoped<ICountryDetailsHandler, CountryDetailsHandler > ();
builder.Services.AddScoped<ICurrencyDetailsHandler, CurrencyDetailsHandler > ();
builder.Services.AddScoped<IDiscountDetailsHandler, DiscountDetailsHandler > ();
builder.Services.AddScoped<ITripDetailsHandler, TripDetailsHandler > ();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowOrigin");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
