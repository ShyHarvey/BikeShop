﻿using System.ComponentModel.DataAnnotations;

namespace BikeShop.Workspace.Domain;

// Базовая сущность, объект наследования
public class BaseEntity
{
    [Key]
    public int Id { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public bool Enabled { get; set; } = true;
}