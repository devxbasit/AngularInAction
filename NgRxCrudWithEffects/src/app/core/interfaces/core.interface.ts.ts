export interface IPost {
  postId?: number;
  title: string;
}

export interface IEnvironment {
  isProduction: boolean;
  firebaseAuthApiBaseUrl: string;
  firebaseRealTimeDbApiBaseUrl: string;
  firebaseWebApiKey: string;
}

export interface IUser {
  localId: string;
  email: string;
  token: string;
  expirationDate: Date;
}

export interface ISignInResponse {
  localId: string;
  idToken: string;
  refreshToken: string;
  email: string;
  expiresIn: number;
  registered: boolean;
}

export interface ISignUpResponse {
  localId: string;
  idToken: string;
  refreshToken: string;
  email: string;
  expiresIn: number;
}
