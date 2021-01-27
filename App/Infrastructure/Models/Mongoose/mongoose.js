import mongoose from 'mongoose';
import db from '../../Config/mongo';

function databaseConnection() {
    mongoose.connect(db, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => console.log("the database connection successfully established"))
}


export default databaseConnection;