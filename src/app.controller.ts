import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
    @Get('health')
    checkHealth() {
      return { message: 'I am Healthy' };
    }
}
