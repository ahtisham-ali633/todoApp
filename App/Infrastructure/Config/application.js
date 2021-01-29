require('dotenv').config();

let port = process.env.PORT
let secretKey = process.env.SECRET_KEY

export {
    port,
    secretKey
}