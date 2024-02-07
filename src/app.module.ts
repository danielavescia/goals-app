import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { Goal } from './goals/goal.respository';
import { User } from './user/user.respository';

@Module({
    imports: [
      AuthModule,
      TypeOrmModule.forRoot({
        type: 'postgres', 
        host: 'app-db', 
        port: 5434, 
        username: 'user', 
        password: 'password', 
        database: 'nest', 
        entities: [User, Goal],
        synchronize: true,
      }),
    ],
  controllers: [AuthController], [UserController],
  providers: [AuthService],[UserService]
})
export class AppModule {}
