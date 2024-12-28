import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './provider/posts.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  // we always import module, to use its service provider. by default nest js allow us to use only provider or service coz we export only provider or service in user module, see user module export
  imports: [UsersModule]
})
export class PostsModule {}
