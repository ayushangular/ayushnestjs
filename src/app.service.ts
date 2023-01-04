import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Ayush Kumar Your practice nest js project!';
  }
}
