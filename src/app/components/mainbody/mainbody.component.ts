import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.css'
})
export class MainbodyComponent {
  video_thumbnails=[
    {
      thumbmnail_img:"../../../assets/imgs/thumbnail.jpg",
      video_name: "Video Name 1",
      channel_name: "Channel Name1"
    },
    {
      thumbmnail_img:"../../../assets/imgs/thumbnail.jpg",
      video_name: "Video Name 2",
      channel_name: "Channel Name2"
    },
    {
      thumbmnail_img:"../../../assets/imgs/thumbnail.jpg",
      video_name: "Video Name 3",
      channel_name: "Channel Name3"
    }
  ]
}
