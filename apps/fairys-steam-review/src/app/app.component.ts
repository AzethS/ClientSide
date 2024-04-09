import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
// import { FeaturesModule } from '@avans-nx-workshop/share-a-meal/features';
import { FeaturesModule } from '../../../../libs/fairys-steam-review/features/src/lib/features.module';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FeaturesModule],
  selector: 'avans-nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fairys-steam-review';
}
