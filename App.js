function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (file) {
    alert('File uploaded: ' + file.name);
  } else {
    alert('No file selected!');
  }
}