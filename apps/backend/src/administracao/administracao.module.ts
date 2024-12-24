import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AdministracaoController } from './administracao.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  imports: [AuthModule],
  controllers: [AdministracaoController], 
})
export class AdministracaoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(AdministracaoController);
  }
}
