import { UsersModule } from './users';
import { MikroOrmConfigFactory } from './config';
import { RenderModule } from './render';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    RenderModule,
    ConfigModule.forRoot(),
    MikroOrmModule.forRootAsync({
      useClass: MikroOrmConfigFactory
    })
  ]
})
export class AppModule {}
