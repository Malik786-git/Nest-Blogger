import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, // mean req body object allow only key which written in DTO class, it helps to avoid additional data keys if client send, but not generate err for additional data. if you want to generate err if user send any additional data field you enable this below property
			forbidNonWhitelisted: true,
			transform: true, // enable req object must be a instance of DTO class
		}),
	);

	// setups apis docs with swagger
	const config = new DocumentBuilder()
		.setTitle('Next Blogger Apis Documentation')
		.setDescription('Use the base API URL http://localhost:8000/')
		.setTermsOfService('http://localhost:8000/term-and-condition')
		.setLicense("Apache 2.0", "https://www.apache.org/licenses/LICENSE-2.0")
		.addServer('http://localhost:8000')
		.setVersion('1.0').build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
