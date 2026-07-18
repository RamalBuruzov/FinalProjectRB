let server = "http://195.26.245.5:9505/api";

let loginVsReg = document.querySelector(".loginVsReg");
let loggedIn = localStorage.getItem("loggedIn") === "true" || false;

const newElement = document.createElement("div");
loggedIn
  ? (newElement.innerHTML = `<ul class="logOutList">
                  <li class="profileIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></li>
                  <li><button class="logOutButton">Log Out</button></li>
                </ul>`)
  : (newElement.innerHTML = `<ul class="loginList">
                  <li><a href="./logIn.html">Log in</a></li>
                </ul>`);

loginVsReg.insertBefore(newElement, loginVsReg.firstChild);

let profileIcon = document.querySelector(".profileIcon");

profileIcon &&
  profileIcon.addEventListener("click", () => {
    window.location.href = "/profile.html";
  });

// null
let logOutButton = document.querySelector(".logOutButton");

logOutButton &&
  logOutButton.addEventListener("click", () => {
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/logIn.html";
  });
