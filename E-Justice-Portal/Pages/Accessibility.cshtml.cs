using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace E_Justice_Portal.Pages
{
    public class AccessibilityModel : PageModel
    {
        private readonly ILogger<AccessibilityModel> _logger;

        public AccessibilityModel(ILogger<AccessibilityModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}