
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const loginBtn = document.getElementById("loginBtn");
        const message = document.getElementById("message");

        loginBtn.addEventListener("click", function () {

            if (username.value === "anu" &&
                password.value === "1234") {

                // window.location.href = "heroes.json";
                window.location.href="index.html"
                // document.getElementById("homePage").style.display="none"
                // document.getElementById("loginPage").style.display="block"

            } else {
                message.textContent =
                    "Invalid username or password!";
            }

        });
