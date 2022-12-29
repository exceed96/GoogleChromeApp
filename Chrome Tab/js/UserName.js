const ShowUserName = document.querySelector("#ShowUserName");
const InputUserName = document.querySelector("#InputUserName");
const LoginUserForm = document.querySelector("#LoginUserForm");
const SaveUserName = localStorage.getItem("UserName");

function ShowUserNameFunction(SaveUserName) {
    ShowUserName.innerHTML = `Hello ${SaveUserName}`;
    ShowUserName.classList.remove("hidden");
    LoginUserForm.classList.add("hidden");
}
function InputUserNameFunction(event) {
    event.preventDefault();
    const UserName = InputUserName.value;
    localStorage.setItem("UserName", UserName);
    ShowUserNameFunction(UserName);
}

LoginUserForm.addEventListener("submit", InputUserNameFunction);

if (SaveUserName) {
    ShowUserNameFunction(SaveUserName);
}