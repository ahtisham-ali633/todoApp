import JwtAuthService from '../../App/Infrastructure/Services/jwtAuthService';

const userAuth = async (req, res, next) => {
    try {
        await JwtAuthService.varifyToken(req);

        next();
    } catch (e) {
        console.log(e)
        res.json({
            error: e.message
        })
    }
}

export default userAuth;