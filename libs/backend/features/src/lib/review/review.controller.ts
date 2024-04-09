import { Controller } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { IReview } from '@avans-nx-workshop/shared/api';
import { CreateReviewDto } from '@avans-nx-workshop/backend/dto';


@Controller('review')
export class ReviewController {
    constructor(private reviewService: ReviewService) {}

    @Get('')
    getAll(): IReview[] {
        return this.reviewService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): IReview {
        return this.reviewService.getOne(id);
    }

    @Post('')
    create(@Body() data: CreateReviewDto): IReview {
        return this.reviewService.create(data);
    }
}
