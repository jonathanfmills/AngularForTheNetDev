using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToDoList.data;
using ToDoList.Models;


namespace ToDoList.Controllers
{
    public class TaskController : ApiController
    {
        private TaskRepository _repo = TaskRepository.GetRepositoryInstance();
        // GET api/task
        public IEnumerable<ToDoList.Models.Task> Get()
        {
            return _repo.tasks;
        }

        // GET api/task/5
        public Task Get(int id)
        {
            return _repo.tasks.Find(x => x.Id == id);
        }

        // POST api/task
        public HttpResponseMessage Post([FromBody]Task value)
        {
            _repo.Add(value);

            return Request.CreateResponse(HttpStatusCode.Created, value);
        }

        // PUT api/task/5
        public HttpResponseMessage Put(int id, [FromBody]Task value)
        {
            _repo.UpdateTask(id, value);
            return Request.CreateResponse(HttpStatusCode.Created, value);
        }

        // DELETE api/task/5
        public void Delete(int id)
        {
        }
    }
}
