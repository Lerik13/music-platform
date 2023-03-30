import {Module} from '@nestjs/common'; 
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import * as path from 'path';
@Module({
	imports: [
		ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
		MongooseModule.forRoot('mongodb+srv://lera:lBg3tmheAtr9nwpc@cluster0.edjrr4y.mongodb.net/music-platform?retryWrites=true&w=majority'),
		TrackModule,
		FileModule
	]
})

export class AppModule {}