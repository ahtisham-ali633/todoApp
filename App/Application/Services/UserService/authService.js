import UserRepository from '../../../Infrastructure/Repository/userRepository';
import UserEntity from '../../../Domain/Entites/userEntity';
import JwtAuthService from '../../../Infrastructure/Services/jwtAuthService';
import jwtAuthService from '../../../Infrastructure/Services/jwtAuthService';

class AuthService {
    static async signin(email, password) {
            const user = await UserRepository.fetchByEmail(email);
            if (!user) {
                throw new Error("auth failed");
            }

            const passwordCompare = await JwtAuthService.verifyUserCredentials(password, user.password);
            if(!passwordCompare){
                throw new Error("auth faild");
            }

            const token = JwtAuthService.generateToken(user.id)
            
            const userObj = UserEntity.createFromObject(user)
            console.log(userObj)
            return { userObj, token }
    }

    static async signup(data) {
        
        const userIsPresent = await UserRepository.fetchByEmail(data.email)
        if (userIsPresent) {
            throw new Error("user already exist")
        }
        
    //    data.userId = UserEntity.generateId();
       console.log("GGGGGGGGGGGGGGGGGGGGG",data);
        const user = UserEntity.createFromObject(data);
        console.log("****************",user);
 
        const hasPassword = await jwtAuthService.encryptPassword(data.password)

        user.setPassword(hasPassword);

        
        return await UserRepository.register(user);
    }

}

export default AuthService;