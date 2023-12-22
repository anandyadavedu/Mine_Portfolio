import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  videoVisible: string = '';

  videoSources: { [key: string]: string } = {
    'News': '/assets/Images/port.mp4',
    'Post-Maker': '/assets/Images/Automatic.mp4',
    'HealthHub-Pro': '/assets/Images/Hospital-demo.mp4'
    // Add more entries for additional projects
  };

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;

  OpenModalDemo(contentId: string) {
    this.videoVisible = contentId; // Set the videoVisible to the contentId
    this.videoPlayer.nativeElement.load();
  }

  closeVideoModal() {
    this.videoVisible = ''; // Clear the videoVisible to hide the videos
    this.videoPlayer.nativeElement.pause();
  }


  // togglePlayPause() {
  //   const video: HTMLVideoElement = this.videoPlayer.nativeElement;

  //   if (video.paused || video.ended) {
  //     video.load();
  //   } else {
  //     video.pause();
  //   }
  // }

}
