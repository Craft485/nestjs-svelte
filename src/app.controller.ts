import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('Home')
  getHello() {
    return { message: 'NestJS + Svelte' };
  }

  @Get('/about')
  @Render('About')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getAbout() {}
}
