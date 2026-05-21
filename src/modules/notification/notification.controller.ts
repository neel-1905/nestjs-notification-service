import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService){}

    @Post()
    create(@Body() dto: CreateNotificationDto){
        return this.notificationService.create(dto)
    }

    @Get(":userId")
    findAll(@Param("userId") userId: string){
        return this.notificationService.findAll(userId)
    }
}
