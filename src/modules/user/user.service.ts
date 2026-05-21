import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateUserDto) {
        return this.prisma.user.create({
            data
        })
    }

    async findAll() {
        return this.prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
    }

    async findOne(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }
}
