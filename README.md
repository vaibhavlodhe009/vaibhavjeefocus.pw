<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vaibhav's JEE Hub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
      padding: 20px;
      text-align: center;
    }
    .container {
      max-width: 500px;
      margin: auto;
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input[type="email"],
    input[type="password"],
    input[type="file"] {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 10px;
    }
    button {
      padding: 10px 20px;
      margin-top: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    #uploadSection, #uploadedFiles {
      display: none;
      margin-top: 20px;
      text-align: left;
    }
    ul {
      padding-left: 20px;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Vaibhav's JEE Hub</h2>

    <!-- Login Form -->
    <div id="loginSection">
      <h3>Login</h3>
      <input type="email" id="email" placeholder="Enter email">
      <input type="password" id="password" placeholder="Enter password">
      <button onclick="login()">Login</button>
    </div>

    <!-- Upload Section (after login) -->
    <div id="uploadSection">
      <h3>Upload File</h3>
      <input type="file" id="fileInput">
      <button onclick="uploadFile()">Upload</button>
    </div>

    <!-- Uploaded Files List -->
    <div id="uploadedFiles">
      <h3>Uploaded Files</h3>
      <ul id="fileList"></ul>
    </div>
  </div>

  <script>
    function login() {
      const email = document.getElementById("email").value;
      const pass = document.getElementById("password").value;

      if(email && pass) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("uploadSection").style.display = "block";
        document.getElementById("uploadedFiles").style.display = "block";
      } else {
        alert("Enter both email and password.");
      }
    }

    function uploadFile() {
      const input = document.getElementById("fileInput");
      const fileList = document.getElementById("fileList");

      if (input.files.length > 0) {
        const li = document.createElement("li");
        li.innerText = input.files[0].name;
        fileList.appendChild(li);
        input.value = ""; // clear input
      } else {
        alert("Please select a file to upload.");
      }
    }
  </script>

</body>
</html>
