import AuthService from '../../App/Application/Services/UserService/authService';

class AuthController {
    static async signin(req, res) {
        try{
            const { email, password } = req.body;

            const user = await AuthService.signin(email, password)

            res.status(200).send({result: user, msg: "user found"})
        }catch(e){
            res.json({ msg: e.message });
        }
    }

    static async signup(req, res) {
        try {
            const user = await AuthService.signup(req.body);
            res.status(200).send({result: user, msg: "user register successfully"});
        } catch (e) {
            res.send({ msg: e.message });
        }
    }
}

export default AuthController;