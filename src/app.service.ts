import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logEvent() {
    Logger.log('This works', 'app.service');
  }
}
