using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeadManageAPI.Model
{
    public interface ILeadRepository
    {
        public IEnumerable<Lead> GetAll();

        public void Add(Lead lead);
    }
}
