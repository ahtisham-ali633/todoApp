import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import AuthInterface from './authInterface';
import {secretKey} from '../Config/application';


class JwtAuthService extends AuthInterface {
    generateToken(id) {
        return jwt.sign({ userId: id }, secretKey, { expiresIn: "1h" });
    }

    varifyToken(req) {
        const token = req.headers.authorization;
        const decode = jwt.verify(token, secretKey);
        return decode;
    }

    verifyUserCredentials(password, encodedPassword) {
        return bcrypt.compare(password , encodedPassword);
    }

    encryptPassword(password) {
        return bcrypt.hash(password, 10)
    }
   
}

export default new JwtAuthService();