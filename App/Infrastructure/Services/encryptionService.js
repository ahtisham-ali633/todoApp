import bcrypt from 'bcrypt';

const encryptPassword = (password) => {
  return bcrypt.hash(password, 10)
}

const comparePassword = (password, encodedPassword) => {
  return bcrypt.compare(password , encodedPassword);
}

module.exports = {
  encryptPassword,
  comparePassword
}