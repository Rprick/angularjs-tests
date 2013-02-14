using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestAngular.Controllers
{
    public class MembersController : Controller
    {
        //
        // GET: /Members/

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult GetMembers() 
        {
            var memberResult = new MemberResult
            {
                members = new List<Member>
            {
                new Member {name="Ramon"},
                new Member {name="Mirjana"},
                new Member {name="Manon"},
                new Member {name="Charlotte"}
            }
            };
            return Json(memberResult, JsonRequestBehavior.AllowGet);
        }
    }

    public class MemberResult {
        public IEnumerable<Member> members { get; set; }
    }

    public class Member {
        public string name { get; set; }
        public bool inEditMode { get; set; }
    }
}
