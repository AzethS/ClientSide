import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewListComponent } from "./review/review-list/review-list.component";
import { ReviewDetailComponent } from "./review/review-detail/review-detail.component";
import { ReviewService } from "./review/review.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [CommonModule, HttpClientModule, ReviewDetailComponent],
    declarations: [ReviewListComponent],
    providers: [ReviewService],
    exports: [ReviewListComponent, ReviewDetailComponent],
})

export class FeaturesModule {}