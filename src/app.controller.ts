import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Home')
  getIndex() {
    return { message: 'NestJS + Svelte' };
  }

  @Get('/about')
  @Render('About')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getAbout() {}

  @Get(['/game', '/g'])
  @Render('Game')
  getGame() {
    this.appService.logEvent();
    return { message: 'Hello World!' };
  }
}
