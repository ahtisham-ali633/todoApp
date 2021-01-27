import UserRepository from '../../../Infrastructure/Repository/userRepository';
import UserEntity from '../../../Domain/Entites/userEntity';
import {encryptPassword, comparePassword} from '../../../Infrastructure/Services/encryptionService';
import JwtAuthService from '../../../Infrastructure/Services/jwtAuthService';

class AuthService {
    static async signin(email, password) {
            const user = await UserRepository.fetchByEmail(email);
            if (!user) {
                throw new Error("auth failed");
            }

            const passwordCompare = await comparePassword(password, user.password);
            if(!passwordCompare){
                throw new Error("auth faild");
            }

            const token = JwtAuthService.generateToken(user.id)
            const userObj = UserEntity.createFromObject(user)
            return { userObj, token }
    }

    static async signup(data) {
        const userIsPresent = await UserRepository.fetchByEmail(data.email)
        if (userIsPresent) {
            throw new Error("user already exist")
        }

        const user = UserEntity.createFromObject(data);

 
        const hasPassword = await encryptPassword(data.password)

        user.setPassword(hasPassword);

        return await UserRepository.register(user);
    }

}

export default AuthService;