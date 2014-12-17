using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDoList.Models;

namespace ToDoList.data
{
    public sealed class TaskRepository
    {
        private int nextId = 3;
        private static TaskRepository instance = null;
        public List<Task> tasks = new List<Task>(new Task[]
            {
                new Task(){Id=1, Completed = false,Name = "Task 1"},

                new Task(){Id = 2,Completed = true,Name = "Task 2"}

            });

        public static TaskRepository GetRepositoryInstance()
        {
            if (instance == null)
            {
                instance = new TaskRepository();
            }
            return instance;
        }



        internal void Add(Task value)
        {
            value.Id = nextId;
            nextId++;
            tasks.Add(value);
        }

        internal void UpdateTask(int id, Task value)
        {
            Task task = tasks.Find(x => x.Id == id);
            task.Name = value.Name;
            task.Completed = value.Completed;
        }
    }
}