import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestAxiosService {
  private readonly result: string;
  constructor(private readonly httpService: HttpService) {}

  async get(url: string) {
    try {
      const response = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      console.error(error);
      return error.response.data.message || 'Error occurred';
    }
  }
}
