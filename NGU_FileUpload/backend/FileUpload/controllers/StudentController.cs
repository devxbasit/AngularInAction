using FileUpload.models;
using Microsoft.AspNetCore.Mvc;

namespace FileUpload.controllers;

[Route("api/v1/student")]
public class StudentController : ControllerBase
{
  [HttpPost("register")]
  public ResponseDto Register()
  {
    var filesCount = Request.Form.Files.Count;


    return new ResponseDto()
    {
      IsSuccess = true,
      Message = $"file Cout = {filesCount}"
    };
  }



}
