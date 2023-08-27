using Microsoft.EntityFrameworkCore;
using UniversityAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
// Add services to the container.
builder.Services.AddDbContext<UniversityDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("UniversityConStr")));
builder.Services.AddControllers().AddJsonOptions(
    options =>
    {
        { options.JsonSerializerOptions.PropertyNamingPolicy = null; };
        { options.JsonSerializerOptions.DictionaryKeyPolicy = null; }
    }
);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
