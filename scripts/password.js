const pass = document.querySelector("#pass");
const pass2 = document.querySelector("#passConfirmation");
const message = document.querySelector("#message");

pass2.addEventListener("focusout", checkSame);

function checkSame() {
  if (pass.value !== pass2.value) {
    message.textContent = "Password Incorrect, Please try again";
    message.style.visibility = "show";
    pass2.style.backgroundColor = "#ffcccb";
    pass.value = "";
    pass2.value = "";
    pass2.focus();
  } else {
    message.style.display = "none";
    pass2.style.backgroundColor = "#e2c2ff";
  }
}
