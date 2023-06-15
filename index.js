document.querySelector(".form_authorization-btn").onclick = function () {
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  if (password1.value === "") {
    password1.style.border = "1px solid red";
    password2.style.border = "1px solid red";
  } else if (password1.value !== password2.value) {
    password1.style.border = "1px solid red";
    password2.style.border = "1px solid red";
    return false;
  } else {
    password1.style.border = "1px solid green";
    password2.style.border = "1px solid green";
  }
  return true;
};
