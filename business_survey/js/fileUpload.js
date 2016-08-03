  function uploadFile() {
    document.getElementById('uploadFile').value = "Uploading File..";
    google.script.run
       .withSuccessHandler(fileUploaded)
       .uploadFiles(document.getElementById("issuePicFormlet"));
    return false;
  }
 
  // This function will be called after the Google Script has executed
  function fileUploaded(status) {
    document.getElementById('issuePicFormlet').style.display = 'none';
    document.getElementById('output').innerHTML = status;
  }
  