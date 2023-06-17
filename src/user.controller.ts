import { Controller, Get, Post } from "@nestjs/common";

@Controller('/users')
export class UserController {

    @Get()
    async createUSer(): Promise<string> {
        return JSON.stringify({ "nome": 'João', "emai": 'joao@example.com', "senha": 'senhaultrasecreta' });
    }

}