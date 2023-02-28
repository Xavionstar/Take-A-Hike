const loginFormHandler = async (event) => {
    event.preventDefault();


  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();   
  //  console.log("Log in------" + email + password);
  if (email && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Incorrect email or password, please try again");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);