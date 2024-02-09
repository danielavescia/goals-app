import { Injectable } from '@nestjs/common';

@Injectable() //dependency injection
export class AuthService {
  signin() {
    return 'I am signed up';
  }

  signup() {
    return 'I am signed in ';
  }
}
