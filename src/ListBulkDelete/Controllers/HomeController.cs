using ListBulkDelete.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Diagnostics;

namespace ListBulkDelete.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public List<Person> _persons;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;

            _persons = new List<Person>() {
                new Person() { Id = 1, Name = "Jhon Silva 1", Age = "16", Phone = "96532869" },
                new Person() { Id = 2, Name = "Jhon Silva 2", Age = "26", Phone = "96532869" },
                new Person() { Id = 3, Name = "Jhon Silva 3", Age = "36", Phone = "96532869" },
                new Person() { Id = 4, Name = "Jhon Silva 4", Age = "46", Phone = "96532869" },
                new Person() { Id = 5, Name = "Jhon Silva 5", Age = "56", Phone = "96532869" },
                new Person() { Id = 6, Name = "Jhon Silva 6", Age = "66", Phone = "96532869" },
                new Person() { Id = 7, Name = "Jhon Silva 7", Age = "34", Phone = "96532869" },
                new Person() { Id = 8, Name = "Jhon Silva 8", Age = "65", Phone = "96532869" },
            };
        }

        public IActionResult Index()
        {  
            return View(_persons);
        }



        public async Task<ActionResult> DeleteBulk(string[] data)
        { 
            data.ToList().ForEach(id =>
            {
                /// Do the task ...
            });

            return View("Index");
        }


    }
}