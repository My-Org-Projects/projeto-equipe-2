import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { UsuarioPrisma } from './usuario.prisma';
import { BcryptProvider } from './bcrypt.provider';
import { AuthMiddleware } from './auth.middleware';
import { MailerSendProvider } from './mailerSend.provider';

@Module({
  imports: [DbModule],
  controllers: [AuthController],
  providers: [UsuarioPrisma, BcryptProvider, MailerSendProvider ,AuthMiddleware],
  exports: [AuthMiddleware, UsuarioPrisma],
})
export class AuthModule {}
