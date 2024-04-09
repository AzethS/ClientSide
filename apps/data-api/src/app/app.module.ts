import { Module } from '@nestjs/common';
import { BackendFeaturesReviewModule } from "../../../../libs/backend/features/src/lib/backend-features-review.module";

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendFeaturesReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
