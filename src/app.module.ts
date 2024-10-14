import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChildModule } from './child/child.module';
import { ParentModule } from './parent/parent.module';
import { Child } from './child/child.entity';
import { Parent } from './parent/parent.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'parents-children-db',
      entities: [
        Child,
        Parent,
      ],
      synchronize: true,
    }),
    ChildModule, ParentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
