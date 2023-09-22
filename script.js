function handleGetFormData () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    const formData = {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    }    

    return (formData);
}
function isNumber (input) {
    
        if (isNaN(input)) {
            return false
        } else {
            return true
        }
}

function checkboxIsChecked() {
    var statusCheckbox = document.getElementById("status");
  
    if (statusCheckbox.checked) {
      return true;
    } else {
      return false;
    }
  }

  function validateFormData (data) {
    return data !== null && isNumber(data.zipCode) && checkboxIsChecked();
}

function submit () {
    const formData = handleGetFormData();

    if(validateFormData(formData) === false) {
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").textContent = "";
        console.log(formData);
    }
}

document.querySelector('form').addEventListener('sumbit', (event) => {
    event.preventDefault();
    submit();
});