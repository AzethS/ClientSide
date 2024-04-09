import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IReview } from '@avans-nx-workshop/shared/api';
import { Injectable } from '@angular/core';

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */
export const httpOptions = {
    observe: 'body',
    responseType: 'json',
};

/**
 *
 *
 */
@Injectable()
export class ReviewService {
    endpoint = 'http://localhost:3000/api/review';

    constructor(private readonly http: HttpClient) {}

    /**
     * Get all items.
     *
     * @options options - optional URL queryparam options
     */
    public list(options?: any): Observable<IReview[] | null> {
        console.log(`list ${this.endpoint}`);

        return this.http
            .get<ApiResponse<IReview[]>>(this.endpoint, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                map((response: any) => response.results as IReview[]),
                tap(console.log),
                catchError(this.handleError)
            );
    }

    /**
     * Get a single item from the service.
     *
     */
    public read(id: string | null, options?: any): Observable<IReview> {
        console.log(`read ${this.endpoint}`);
        return this.http
            .get<ApiResponse<IReview>>(this.endpoint, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                tap(console.log),
                map((response: any) => response.results as IReview),
                catchError(this.handleError)
            );
    }

    /**
     * Handle errors.
     */
    public handleError(error: HttpErrorResponse): Observable<any> {
        console.log('handleError in MealService', error);

        return throwError(() => new Error(error.message));
    }
}
