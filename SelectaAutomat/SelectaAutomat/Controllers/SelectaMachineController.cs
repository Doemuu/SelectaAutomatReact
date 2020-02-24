using Microsoft.AspNetCore.Mvc;
using SelectaAutomat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SelectaAutomat.Controllers
{
    [Route("api/selecta")]
    public class SelectaMachineController : Controller
    {

        private readonly ISelectaService _selectaService;

        public SelectaMachineController(ISelectaService selectaService)
        {
            this._selectaService = selectaService;
        }

        [HttpGet("getSelecta")]
        public SelectaMachine GetSelecta()
        {
            return _selectaService.Machine;
        }

        [HttpGet("createUser")]
        public User CreateUser()
        {
            return _selectaService.AddUser(new Models.User());
        }

        [HttpGet("getUser/{id}")]
        public User GetUser(int id)
        {
            return _selectaService.GetUser(id);
        }
    }
}
