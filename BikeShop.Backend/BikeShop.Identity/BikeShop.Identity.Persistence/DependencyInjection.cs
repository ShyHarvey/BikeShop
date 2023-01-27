﻿using BikeShop.Identity.Application.Interfaces;
using BikeShop.Identity.Application.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace BikeShop.Identity.Persistence;

public static class DependencyInjection
{
    public static IServiceCollection AddPersistence(this IServiceCollection services)
    {
        services.AddDbContext<AuthDbContext>(options => { options.UseSqlite("Data source=identity.db"); });

        // Связал интерфейс контекста с ранее созданным сервисом на классе 
        services.AddScoped<IAuthDbContext>(provider =>
            provider.GetService<AuthDbContext>());

        services.AddScoped<JwtService>();
        services.AddScoped<CookieService>();

        return services;
    }
}