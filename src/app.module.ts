import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
	imports: [
		UsersModule,
		PostsModule,
		AuthModule,
		TypeOrmModule.forRootAsync({
			imports: [],
			inject: [],
			useFactory: () => ({
				type: 'postgres',
				entities: [User],
				// alert: enable only in dev mode coz its created table itself if its need. so its good for prod
				synchronize: true,
				port: 5432,
				username: 'postgres',
				password: 'Admin@123',
				host: 'localhost',
				database: 'nestjs-blog',
			}),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
