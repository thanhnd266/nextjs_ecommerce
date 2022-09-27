function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const valid = (name, email, password, cf_password) => {
    if(!name || !email || !password)
    return 'please add all fields';

    if(!validateEmail(email)) {
        return 'Invalid email'
    }

    if(password.length < 6) {
        return 'Password must be at least 6 characters.'
    }

    if(password !== cf_password) {
        return 'Confirm password did not match';
    }
}


export default valid;