import { Injectable, NotFoundException } from '@nestjs/common';
import { IReview } from '@avans-nx-workshop/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class ReviewService {
    TAG = 'ReviewService';

    private reviews$ = new BehaviorSubject<IReview[]>([
        {
            appId: '0',
            id: '0',
            title: 'Spaghetti con funghi',
            content: 'Vega version of the famous spaghetti recipe.',
            postDate: new Date(),
            edited: false,
            user: "Fairys",
            upVoteCount: 12,
            downVoteCount: 12,
            isDownVoted: true,
            isUpVoted: false
        },
    ]);

    getAll(): IReview[] {
        Logger.log('getAll', this.TAG);
        return this.reviews$.value;
    }

    getOne(id: string): IReview {
        Logger.log(`getOne(${id})`, this.TAG);
        const review = this.reviews$.value.find((td) => td.id === id);
        if (!review) {
            throw new NotFoundException(`Review could not be found!`);
        }
        return review;
    }

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(review: Pick<IReview, 'title' | 'content'>): IReview {
        Logger.log('create', this.TAG);
        const current = this.reviews$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newReview: IReview = {
            ...review,
            id: `review-${Math.floor(Math.random() * 10000)}`,
            appId: '1',
            title: 'Review test 2',
            content: 'Review test 2Review test 2',
            postDate: new Date(),
            edited: false,
            user: "Fairys",
            upVoteCount: 111,
            downVoteCount: 1,
            isDownVoted: true,
            isUpVoted: false
        };
        this.reviews$.next([...current, newReview]);
        return newReview;
    }
}
