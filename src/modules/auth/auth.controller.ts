import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} //  shortcut to create an instance of authService

  //endpoint to create a new user
  @Post('signup')
  @ApiOperation({ summary: 'Retorna uma mensagem' })
  @ApiResponse({
    status: 200,
    description: 'Mensagem de sucesso ao se inscrever.',
  })
  signup() {
    return this.authService.signup();
  }

  //endpoint to login
  @Post('signin')
  @ApiOperation({ summary: 'Retorna uma mensagem' })
  @ApiResponse({
    status: 200,
    description: 'Mensagem de sucesso ao logar.',
  })
  signin() {
    return this.authService.signin();
  }
}
