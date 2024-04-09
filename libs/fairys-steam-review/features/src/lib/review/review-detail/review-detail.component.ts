import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'avans-nx-workshop-review-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-detail.component.html',
  styleUrl: './review-detail.component.css',
})
export class ReviewDetailComponent {}


// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ReviewService } from '../review.service';
// import { IReview } from '@avans-nx-workshop/shared/api';
// import { Subscription } from 'rxjs';

// @Component({
//     selector: 'avans-nx-workshop-review-detail',
//     templateUrl: './review-detail.component.html',
//     styleUrls: ['./review-detail.component.css'],
// })
// export class ReviewDetailComponent implements OnInit, OnDestroy {
//     reviews: IReview[] | null = null;
//     subscription: Subscription | undefined = undefined;

//     constructor(private reviewService: ReviewService) {}

//     ngOnInit(): void {
//         this.subscription = this.reviewService.list().subscribe((results) => {
//             console.log(`results: ${results}`);
//             this.reviews = results;
//         });
//     }

//     ngOnDestroy(): void {
//         if (this.subscription) this.subscription.unsubscribe();
//     }
// }
