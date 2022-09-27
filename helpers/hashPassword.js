import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);

export const hashPassword = (password) => {
    let hash = bcrypt.hashSync(password, salt);
    return hash;
}

export const comparePassword = (password, hash) => {
    let isValid = bcrypt.compareSync(password, hash);
    return isValid;
}