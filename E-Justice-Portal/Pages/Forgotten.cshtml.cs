using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace E_Justice_Portal.Pages
{
    public class ForgottenModel : PageModel
    {
        private readonly ILogger<ForgottenModel> _logger;

        public ForgottenModel(ILogger<ForgottenModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}