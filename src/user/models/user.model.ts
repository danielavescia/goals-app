export class UserModel {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(userData: UserModel) {
    this.id = userData.id;
    this.username = userData.username;
    this.email = userData.email;
    this.password = userData.password;
    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;
  }
}
