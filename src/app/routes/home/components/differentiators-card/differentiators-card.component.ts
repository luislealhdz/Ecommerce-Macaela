import { Component, Input } from '@angular/core';
import Differentiator from '@shared/constants/differentiators';

@Component({
  selector: 'app-differentiators-card',
  standalone: true,
  imports: [],
  templateUrl: './differentiators-card.component.html',
  styleUrl: './differentiators-card.component.scss'
})
export class DifferentiatorsCardComponent {
  @Input() differentiator!: Differentiator;
}
