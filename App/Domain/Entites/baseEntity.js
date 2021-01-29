import { v4 as uuidv4 } from 'uuid';

class BaseEntity {
    static generateId() {
        return uuidv4();
    }
}

export default BaseEntity;