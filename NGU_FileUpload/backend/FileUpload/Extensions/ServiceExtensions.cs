namespace FileUpload.Extensions;

public static class ServiceExtensions
{

  public static void ConfigureCors(this IServiceCollection services)
  {
    services.AddCors(options =>
    {
      options.AddPolicy("Policy1", builder =>
      {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
      });
    });
  }

}
