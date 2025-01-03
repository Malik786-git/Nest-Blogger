import { PostType } from './enums/postType.enum';
import { postStatus } from './enums/postStatus.enum';
import { CreatePostMetaOptionDto } from './dtos/create-post-meta-optoin.dto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Post {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'varchar',
		length: 512,
		nullable: false,
	})
	title: string;

	@Column({
		type: 'enum',
		enum: PostType,
		nullable: false,
		default: PostType.POST,
	})
	postType: PostType;

	@Column({
		type: 'varchar',
		length: 256,
		nullable: false,
		unique: true,
	})
	slug: string;

	@Column({
		type: 'enum',
		enum: postStatus,
		nullable: false,
		default: postStatus.DRAFT,
	})
	status: postStatus;

	@Column({
		// for content long txt use text to be good
		type: 'text',
		nullable: false,
	})
	content?: string;

	@Column({
		type: 'text',
		nullable: false,
	})
	schema?: string;

	@Column({
		type: 'varchar',
		length: 1024,
		nullable: false,
	})
	featuredImageUrl?: string;

	@Column({
		type: 'timestamp', // datetime
		nullable: true,
	})
	publishOn?: Date;

	// work on it when we learn relationship
	tags?: string[];
	metaOptions?: CreatePostMetaOptionDto[];
}
