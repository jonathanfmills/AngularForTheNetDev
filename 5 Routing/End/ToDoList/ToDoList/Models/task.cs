using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ToDoList.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Completed { get; set; }

    }
}
