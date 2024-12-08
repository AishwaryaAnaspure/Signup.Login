function signup(userName) {
    // Declare an array 
    const users = ["Alice", "Bob", "Carolina"];

    // Check if userName is already in the array
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    }

    // If not, add the userName to the array and return success message
    users.push(userName);
    return "Signup Successful, Please Login";
}

