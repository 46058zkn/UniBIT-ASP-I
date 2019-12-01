using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace E_Justice_Portal.Pages
{
    public class FeedbackModel : PageModel
    {
        private readonly ILogger<FeedbackModel> _logger;

        public FeedbackModel(ILogger<FeedbackModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}