import { Component } from '@angular/core';
import { DifferentiatorsComponent } from '@routes/home/components/differentiators/differentiators.component';
import { VideoBannerComponent } from '@routes/home/components/video-banner/video-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoBannerComponent, DifferentiatorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
