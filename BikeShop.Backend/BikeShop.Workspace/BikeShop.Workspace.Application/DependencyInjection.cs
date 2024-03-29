﻿using System.Reflection;
using BikeShop.Workspace.Application.Services;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace BikeShop.Workspace.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        // Инжект библиотеки mediatr для CQRS
        services.AddMediatR(Assembly.GetExecutingAssembly());

        // Инжект кастомных сервисов
        services.AddScoped<WorkGroupService>();


        return services;
    }
}