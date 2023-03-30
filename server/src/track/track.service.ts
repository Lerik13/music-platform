import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()

export class TrackService {
	
	constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
				@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
				private fileService: FileService) {}
	
	async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
		const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
		const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
		const track = await this.trackModel.create({...dto, listens: 0, picture: picturePath, audio: audioPath})
		return track
	}
	
	async getAll(): Promise<Track[]> {
		const tracks = await this.trackModel.find()
		return tracks
	}
	
	async getOne(id: ObjectId): Promise<Track> {
		const track = await this.trackModel.findById(id)
		return track
	}
	
	async deleteOne(id: ObjectId): Promise<ObjectId> {
		const track = await this.trackModel.findByIdAndDelete(id)
		return track.id
	}

	async deleteAll(): Promise<Boolean> {
		try {
			const tracks = await this.trackModel.find()
			for (const track of tracks) {
				await this.trackModel.findByIdAndDelete(track.id)
			}
			return true
		} catch(e) {
			console.log(e)
			return false
		}
	}

	async addComment(dto: CreateCommentDto): Promise<Comment> {
		const track = await this.trackModel.findById(dto.trackId)
		const comment = await this.commentModel.create({...dto})
		track.comments.push(comment.id)
		await track.save()
		return comment
	}
}