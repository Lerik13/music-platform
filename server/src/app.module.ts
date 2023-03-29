import {Module} from '@nestjs/common'; 
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';
@Module({
	imports: [
		MongooseModule.forRoot('mongodb+srv://lera:lBg3tmheAtr9nwpc@cluster0.edjrr4y.mongodb.net/music-platform?retryWrites=true&w=majority'),
		TrackModule
	]
})

export class AppModule {}