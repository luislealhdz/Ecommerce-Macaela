import { Component } from '@angular/core';
import { DifferentiatorsCardComponent } from '../differentiators-card/differentiators-card.component';
import Differentiator, {
  DIFFERENTIATORS
} from '@shared/constants/differentiators';

@Component({
  selector: 'app-differentiators',
  standalone: true,
  imports: [DifferentiatorsCardComponent],
  templateUrl: './differentiators.component.html',
  styleUrl: './differentiators.component.scss'
})
export class DifferentiatorsComponent {
  listOfDifferentiators: Differentiator[] = DIFFERENTIATORS;
}
