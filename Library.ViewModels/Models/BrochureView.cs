using System;
using System.Collections.Generic;
using System.Text;

namespace Library.ViewModels.Models
{
    public class BrochureView
    {
        public int BrochureId { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int NumberOfPages { get; set; }
    }
}
