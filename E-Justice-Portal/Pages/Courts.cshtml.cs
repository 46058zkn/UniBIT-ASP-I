﻿using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace E_Justice_Portal.Pages
{
    public class CourtsModel : PageModel
    {
        private readonly ILogger<CourtsModel> _logger;

        public CourtsModel(ILogger<CourtsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}