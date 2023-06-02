import { Injectable } from '@nestjs/common';
import { RequestAxiosService } from './common/request.axios.service';

@Injectable()
export class AppService {
  constructor(private readonly httpService: RequestAxiosService) {}
  getHello(): string {
    return `Hello I'm gateway!`;
  }

  async sayHelloAuth() {
    return await this.httpService.get('http://auth_service_ex-auth-1:3001/');
  }
}
