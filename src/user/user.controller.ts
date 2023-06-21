import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dtos/CreateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid';
import { ListingUserDTO } from "./dtos/ListUsers.dto";
import { UpdateUserDTO } from "./dtos/UpdateUser.dto";

@Controller('/users')
export class UserController {

    constructor(
        private userRepository: UserRepository
    ) { }

    @Get()
    public async getUSer() {
        const savedUsers = await this.userRepository.list();
        const userList = savedUsers.map(
            user => new ListingUserDTO(
                user.id,
                user.name
            ));

        return userList;
    }

    @Post()
    public async createUser(@Body() userData: CreateUserDTO) {
        const userEntity = new UserEntity();

        userEntity.id = uuid();
        userEntity.name = userData.name
        userEntity.email = userData.email
        userEntity.password = userData.password

        this.userRepository.save(userEntity);

        return {
            user: new ListingUserDTO(userEntity.id, userEntity.name),
            message: 'Usuário criado com sucesso'
        }
    }

    @Put('/:id')
    public async updateUSer(@Param('id') id: string, @Body() updateData: UpdateUserDTO) {
        const updatedUser = await this.userRepository.update(id, updateData);

        return {
            user: updatedUser,
            message: 'Usuário atualizado com sucesso'
        }
    }

    @Delete('/:id')
    public async deleteUser(@Param('id') id: string) {
        const deletedUser = await this.userRepository.delete(id);

        return {
            user: deletedUser,
            message: 'Usuário deletado com sucesso'
        }
    }

}