// Importing necessary components from Angular
import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // Importing NgFor directive for iterating over a collection

@Component({
  // Component metadata
  selector: 'app-mainbody', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [NgFor], // Importing necessary components
  templateUrl: './mainbody.component.html', // Template URL for the component
  styleUrl: './mainbody.component.css' // CSS file URL for the component
})
export class MainbodyComponent {
  // Class definition for MainbodyComponent

  // Array containing video thumbnails data
  video_thumbnails=[
    {
      thumbmnail_img:"../../../assets/imgs/thumbnail.jpg", // Thumbnail image path
      video_name: "Video Name 1", // Name of the video
      channel_name: "Channel Name1" // Name of the channel
    },
    {
      thumbmnail_img:"../../../assets/imgs/thumbnail.jpg", // Thumbnail image path
      video_name: "Video Name 2", // Name of the video
      channel_name: "Channel Name2" // Name of the channel
    },
    {
      thumbmnail_img:"../../../assets/imgs/thumbnail.jpg", // Thumbnail image path
      video_name: "Video Name 3", // Name of the video
      channel_name: "Channel Name3" // Name of the channel
    }
  ]
}
