import { Injectable } from "@nestjs/common"

@Injectable()	// Dependency Injection 
export class AppService {
	getUsers(): string {
		return 'GET ALL USERS'
	}
}