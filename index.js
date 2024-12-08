function signup(userName) {
    const users = ["Alice", "Bob", "carolina123"];
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    }
    users.push(userName);
    return "Signup Successful, Please Login";
}

function login(userName, password) {
    const users = ["Alice", "Bob", "carolina123"];
    const correctPassword = "Emp@123";

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    if (password !== correctPassword) {
        return "Wrong Password....";
    }

    return "Login Successful...";
}
