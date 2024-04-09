import { Id } from './id.type';

// export enum MealSort {
//     Breakfast = 'Breakfast',
//     Lunch = 'Lunch',
//     Dinner = 'Dinner',
//     Other = 'Other'
// }



// export interface IMeal {
//     id: Id;
//     title: string;
//     description: string;
//     isVega: boolean;
//     dateServed: Date;
//     sort: MealSort;
//     // Naam van de persoon die de maaltijd aanmaakt en kookt.
//     cook: User;
// }

// export type ICreateMeal = Pick<
//     IMeal,
//     'title' | 'description' | 'sort' | 'cook'
// >;
// export type IUpdateMeal = Partial<Omit<IMeal, 'id'>>;
// export type IUpsertMeal = IMeal;


// Voor nu is onze user een string; later zullen we hier een User object van maken.
type User = string;

export interface IReview {
       id: Id,
       appId: string,
       title: string,
       content: string,
       postDate: Date,
       edited: boolean,
       user: User,
       upVoteCount: number,
       downVoteCount: number,
       isUpVoted: boolean,
       isDownVoted: boolean
  
    // upVote() {
    //   if (!this.isUpVoted) {
    //     this.isUpVoted = true;
    //     this.upVoteCount++;
  
    //     if (this.isDownVoted) {
    //       this.downVoteCount--;
    //       this.isDownVoted = false;
    //     }
    //   }
    // }
  
    // downVote() {
    //   if (!this.isDownVoted) {
    //     this.isDownVoted = true;
    //     this.downVoteCount++;
  
    //     if (this.isUpVoted) {
    //       this.upVoteCount--;
    //       this.isUpVoted = false;
    //     }
    //   }
    // }
  }
  
  export type ICreateReview = Pick<
    IReview,'title' | 'content' | 'user'
>;
export type IUpdateReview = Partial<Omit<IReview, 'id'>>;
export type IUpsertReview = IReview;