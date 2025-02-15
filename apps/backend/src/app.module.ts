import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { AdministracaoModule } from './administracao/administracao.module';

@Module({
  imports: [AuthModule, DbModule, AdministracaoModule],
  controllers: [AppController],
})
export class AppModule {}
