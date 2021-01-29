import BaseEntity from "./baseEntity";

class UserEntity extends BaseEntity {
    constructor(userId, name, email) {
        super();
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    static createFromObject(obj) {
        const user = new UserEntity(UserEntity.generateId(), obj.name, obj.email);
        return user;
    }

    setPassword(password){
        this.password = password;
    }
}

export default UserEntity;