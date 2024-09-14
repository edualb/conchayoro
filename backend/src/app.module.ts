import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      omitNull: true,
      autoLoadModels: true,
      synchronize: true
    }),
    ProductsModule,
  ],
})
export class AppModule {}
