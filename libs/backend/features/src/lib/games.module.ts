import { Module } from '@nestjs/common';
import { ReviewController } from './review/review.controller';

@Module({
  controllers: [ReviewController],
  providers: [],
  exports: [],
})
export class GamesModule {}
