import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate,
    IsInt
} from 'class-validator';
import {
    ICreateReview,
    IUpdateReview,
    IUpsertReview
} from '@avans-nx-workshop/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateReviewDto implements ICreateReview {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    content!: string;


    @IsString()
    @IsNotEmpty()
    user!: string;
}

export class UpsertReviewDto implements IUpsertReview {

    @IsString()
    @IsNotEmpty()
    appId!: string;

    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    content!: string;

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsDate()
    @IsNotEmpty()
    postDate!: Date;

    @IsBoolean()
    @IsNotEmpty()
    edited!: boolean;

    @IsString()
    @IsNotEmpty()
    user!: string;

    @IsInt()
    @IsNotEmpty()
    upVoteCount!: number;

    @IsInt()
    @IsNotEmpty()
    downVoteCount!: number;
    
    @IsBoolean()
    @IsNotEmpty()
    isUpVoted!: boolean;

    @IsBoolean()
    @IsNotEmpty()
    isDownVoted!: boolean;

}

export class UpdateReviewDto implements IUpdateReview {
    @IsString()
    @IsOptional()
    title!: string;

    @IsString()
    @IsOptional()
    content!: string;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
}
