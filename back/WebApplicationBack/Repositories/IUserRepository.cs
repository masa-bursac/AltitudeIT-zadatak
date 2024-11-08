﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationBack.Model;

namespace WebApplicationBack.Repositories
{
    public interface IUserRepository
    {
        public List<User> GetAll();
    }
}