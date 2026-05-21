import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
    constructor(private prisma: PrismaService){}

    async create(data: CreateNotificationDto){
        return this.prisma.notification.create({
            data
        })
    }

    async findAll(userId: string){
        return this.prisma.notification.findMany({
            where:{
                userId
            },
            orderBy: {
                createdAt: "desc"
            }
        })
    }
}
