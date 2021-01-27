import jwt from 'jsonwebtoken';
import AuthInterface from './authInterface';


class JwtAuthService extends AuthInterface {
    generateToken(id) {
        return jwt.sign({ userId: id }, 'secret', { expiresIn: "1h" });
    }
}

export default new JwtAuthService();