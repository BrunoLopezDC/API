import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest, SelectUserRequest } from './dto';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Get()
	async getUsers() {
		return this.userService.getUsers();
	}

	@Post()
	async createUser(@Body() request: CreateUserRequest) {
		return this.userService.createUser(request)
	}

	@Delete()
	async deleteUser(@Body() request: SelectUserRequest) {
		return this.userService.deleteUser(request)
	}
	@Put()
	async updateUser(@Body() request: SelectUserRequest) {
		return this.userService.updateUser(request.id, request)
	}
}
