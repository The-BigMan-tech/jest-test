import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
  @Get('two')
  public async getTwo():Promise<number> {
    return 10
  }
  @Get('average')
  public getAvg(...numbers:number[]):number {
      let sum:number = 0
      for (let number of numbers) {
        sum += number
      }
      return sum/numbers.length
  }
}
