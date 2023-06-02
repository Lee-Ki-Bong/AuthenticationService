import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestAxiosService } from './common/request.axios.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    // 공통 전역 서비스
    RequestAxiosService,
    AppService,
  ],
})
export class AppModule {}
