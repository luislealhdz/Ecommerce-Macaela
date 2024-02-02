import { Component } from '@angular/core';

@Component({
  selector: 'app-video-banner',
  standalone: true,
  imports: [],
  templateUrl: './video-banner.component.html',
  styleUrl: './video-banner.component.scss'
})
export class VideoBannerComponent {
  video_path: string = '../../../../../assets/videos/summer.mp4';
}
