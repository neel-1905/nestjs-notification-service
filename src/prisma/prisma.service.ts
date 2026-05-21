import { Injectable  } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import configuration from '../config/configuration';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        const adapter = new PrismaPg({connectionString: configuration().databaseUrl})
        super({ adapter });
    }
}
