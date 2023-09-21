// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
  
    return {
        name,
        email,
        city,
        zipCode,
        status
    }
  
  }
  
  function isNumber(str) {
      if (isNaN(str)) {
        return false;
      }else {
        return true;
      }
  }
  
  function checkboxIsChecked() {
    const statusInput = document.getElementById("status");
    return statusInput.checked;
  }
  
  function validateFormData(data) {
    const statusInput = document.getElementById("status");
    return (data !== null && isNumber(data.zipCode) && statusInput.checked);
  }
  
  
  function submit() {
      const data = handleGetFormData();
      const isValid = validateFormData(data);
      if (!isValid) {
      document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi";
    } else {
      document.getElementById("warning").textContent = "";
    }
  }
  
  const form = document.getElementById('loginForm')
  
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      submit();
  })