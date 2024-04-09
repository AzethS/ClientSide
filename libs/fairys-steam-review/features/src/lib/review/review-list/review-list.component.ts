import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReviewService } from '../review.service';
import { IReview } from '@avans-nx-workshop/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-workshop-review-list',
    templateUrl: './review-list.component.html',
    styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent implements OnInit, OnDestroy {
    reviews: IReview[] | null = null;
    subscription: Subscription | undefined = undefined;

    constructor(private reviewService: ReviewService) {}

    ngOnInit(): void {
        this.subscription = this.reviewService.list().subscribe((results) => {
            console.log(`results: ${results}`);
            this.reviews = results;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
}
