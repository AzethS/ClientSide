import { Module } from '@nestjs/common';
import { BackendFeaturesReviewModule } from '@avans-nx-workshop/backend/features';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendFeaturesReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
