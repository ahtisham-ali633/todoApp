
// import { google } from "googleapis";
// import gaxios from 'gaxios';
// // import { googleCredentials } from "../../Infrastructure/config";
// // import userService from "../../Domain/services/user";

// class GoogleAuthService {
//   constructor() {
//     super();
//     this.auth = new google.auth.OAuth2(
//       googleCredentials.googleClientId,
//       googleCredentials.googleClientSecret,
//       googleCredentials.redirect
//     );
//     this.defaultScope = [
//       "https://www.googleapis.com/auth/userinfo.email",
//       "https://www.googleapis.com/auth/userinfo.profile"
//     ];
//     this.baseURL = 'https://www.googleapis.com';
//     this.url = '/oauth2/v3/userinfo';
//   }

//   getConnectionUrl() {
//     return this.auth.generateAuthUrl({
//       access_type: "offline",
//       prompt: "consent",
//       scope: this.defaultScope
//     });
//   }

//   async getGoogleAccountFromCode(code) {
//     const data = await this.auth.getToken(code);
//     const tokens = data.tokens;
//     this.auth.setCredentials(tokens);
//     gaxios.instance.defaults = {
//       baseURL: this.baseURL,
//       headers: {
//         Authorization: "Bearer " + this.auth.credentials.access_token
//       }
//     }
//     const userinfo = await gaxios.request({ url: this.url });
//     return await userService.authUser({ name: userinfo.data.name, email: userinfo.data.email, password: userinfo.data.sub });
//   }

// }

// export default  GoogleAuthService;


