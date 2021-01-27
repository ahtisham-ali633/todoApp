import User from '../Models/Mongoose/userModel';

class UserRepository {
    static async fetchByEmail(email) {
        return await User.findOne({ email });
    }

    static async register(data) {
        const user = new User(data);
        return await user.save();
    }
}

export default UserRepository;