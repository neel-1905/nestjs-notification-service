import { IsString, IsUUID } from "class-validator";

export class CreateNotificationDto {
    @IsString()
    title!: string;

    @IsString()
    message!: string;

    @IsUUID()
    userId!: string;
}