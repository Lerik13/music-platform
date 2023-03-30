import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { UploadedFiles } from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { ObjectId } from 'mongoose';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('/tracks')

export class TrackController {
	constructor(private trackService: TrackService) {}

	@Post()
	@UseInterceptors(FileFieldsInterceptor([
		{ name: 'picture', maxCount: 1 },
		{ name: 'audio', maxCount: 1 },
	]))
	create( @UploadedFiles() files: { picture?: Express.Multer.File[], audio?: Express.Multer.File[] },
			@Body() dto: CreateTrackDto ) {
		const {picture, audio} = files
		return this.trackService.create(dto, picture[0], audio[0])
	}
	
	@Get()
	getAll( @Query('count') count: number,
			@Query('offset') offset: number ) {
		return this.trackService.getAll(count, offset)
	}

	@Get('/search')
	search(@Query('query') query: string) {
		return this.trackService.search(query)
	}

	@Get(':id')
	getOne(@Param('id') id: ObjectId) {
		return this.trackService.getOne(id)
	}

	@Delete(':id')
	deleteOne(@Param('id') id: ObjectId) {
		return this.trackService.deleteOne(id)
	}

	@Delete()
	deleteAll() {
		return this.trackService.deleteAll()
	}

	@Post('/comment')
	addComment(@Body() dto: CreateCommentDto) {
		return this.trackService.addComment(dto)
	}
	
	// Increase qty of listens for track
	@Post('/listen/:id')
	listen(@Param('id') id: ObjectId) {
		return this.trackService.listen(id)
	}
}