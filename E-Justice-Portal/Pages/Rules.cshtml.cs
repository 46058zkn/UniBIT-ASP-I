﻿using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace E_Justice_Portal.Pages
{
    public class RulesModel : PageModel
    {
        private readonly ILogger<RulesModel> _logger;

        public RulesModel(ILogger<RulesModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}