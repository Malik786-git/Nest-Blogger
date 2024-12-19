import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, // mean req body object allow only key which written in DTO class, it helps to avoid additional data keys if client send, but not generate err for additional data. if you want to generate err if user send any additional data field you enable this below property
			forbidNonWhitelisted: true,
			transform: true, // enable req object must be a instance of DTO class
		}),
	);
	await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
