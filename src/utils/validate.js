const checkValidData = (email, password,fullname) => {

const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//Minimum eight characters, at least one letter, one number and one special character
const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
const isFullnameValid = /^[a-zA-Z ]+$/.test(fullname);

if(!isFullnameValid){
    return "Fullname is not valid"
}
if(!isEmailValid){
    return "Email is not valid";
}
if(!isPasswordValid){
    return "Password is not valid";
}

return null;

}

export default checkValidData;