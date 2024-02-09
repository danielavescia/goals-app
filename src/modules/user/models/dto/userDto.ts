export class UserModel {
  username: string;
  email: string;

  constructor(userData: UserModel) {
    this.username = userData.username;
    this.email = userData.email;
  }
}
