import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UpdateUserDTO } from "./dtos/UpdateUser.dto";

@Injectable()
export class UserRepository {

    private users: UserEntity[] = []

    public async save(user: UserEntity) {
        this.users.push(user);
    }

    public async list() {
        return this.users;
    }

    public async update(id: string, updateData: Partial<UserEntity>) {
        const user = this.findUserByID(id);

        Object.entries(updateData).forEach(([key, value]) => {
            if (key === 'id') return;

            user[key] = value;
        });

        return user;
    }

    public async delete(id: string) {
        const user = this.findUserByID(id);

        this.users = this.users.filter(
            userSaved => userSaved.id !== id
        );

        return user;
    }

    public async findUserByEmail(email: string) {
        const possibleUser = this.users.find(
            user => user.email === email
        );

        return possibleUser !== undefined;
    }

    public async findUserByID(id: string) {
        const possibleUser = this.users.find(user => user.id === id);

        if (!possibleUser) throw new Error('Usuário não existe');

        return possibleUser;
    }

}