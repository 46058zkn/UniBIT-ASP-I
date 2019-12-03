using System;
using System.Linq;
using System.Threading.Tasks;
using E_Justice_Portal.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace E_Justice_Portal.Pages
{
    public class ImageUploadFormModel : PageModel
    {
        private static CloudBlobClient _blobClient;

        private const string BlobContainerName = "photogallery-images";

        private static CloudBlobContainer _blobContainer;

        private ApplicationDbContext _context;

        public IConfiguration _configuration;

        [BindProperty]
        public GalleryImage GalleryImage { get; set; }

        public ImageUploadFormModel(IConfiguration configuration,
            ApplicationDbContext context)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task OnGetAsync()
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(_configuration.GetConnectionString("AzureStorageConnectionString"));

            _blobClient = storageAccount.CreateCloudBlobClient();

            _blobContainer = _blobClient.GetContainerReference(BlobContainerName);

            await _blobContainer.CreateIfNotExistsAsync();

            await _blobContainer.SetPermissionsAsync(new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Blob });
        }

        public async Task<IActionResult> OnPost(IFormCollection form)
        {
            try
            {
                var file = form.Files.FirstOrDefault();

                CloudBlockBlob blob = _blobContainer.GetBlockBlobReference(file?.FileName);

                blob.Properties.ContentType = file?.ContentType;

                await blob.UploadFromStreamAsync(file?.OpenReadStream());

                GalleryImage.URL = $"{_blobContainer.StorageUri.PrimaryUri}/{file?.FileName}";

                _context.GalleryImages.Add(GalleryImage);

                await _context.SaveChangesAsync();

                TempData["SuccessMessage"] = "Успешно беше качен файл!!";

                return RedirectToPage("ImageGallery");
            }
            catch
            {
                return RedirectToPage("Error");
            }
        }
    }
}