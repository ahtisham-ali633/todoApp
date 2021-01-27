class AuthInterface {
    generateToken() {
        throw new Error("not implemented");
    }

    verifyToken() {
        throw new Error("not implemented");
    }

    verifyUserCredentials() {
        throw new Error("not implemented");
    }
}

export default AuthInterface