// Importing necessary components from Angular
import { Component } from '@angular/core';
import { WholeNavbarComponent } from '../whole-navbar/whole-navbar.component'; // Importing WholeNavbarComponent
import { SidebarComponent } from '../sidebar/sidebar.component'; // Importing SidebarComponent
import { NgFor } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  // Component metadata
  selector: 'app-subscribe-navigation', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [WholeNavbarComponent, SidebarComponent,NgFor,DropdownComponent], // Importing necessary components
  templateUrl: './subscribe-navigation.component.html', // Template URL for the component
  styleUrl: './subscribe-navigation.component.css' // CSS file URL for the component
})
export class SubscribeNavigationComponent {
  // Class definition for SubscribeNavigationComponent

  video_thumbnails=[
    {
      thumbmnail_img:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Thumbnail image path
      video_name: "Subscribed Video Name 1", // Name of the video
      channel_name: "Subscribed Channel Name1" // Name of the channel
    },
    {
      thumbmnail_img:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Thumbnail image path
      video_name: "Subscribed Video Name 2", // Name of the video
      channel_name: "Subscribed Channel Name2" // Name of the channel
    },
    {
      thumbmnail_img:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Thumbnail image path
      video_name: "Subscribed Video Name 3", // Name of the video
      channel_name: "Subscribed Channel Name3" // Name of the channel
    }
  ]
}
