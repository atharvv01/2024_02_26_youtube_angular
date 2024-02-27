// Importing necessary components from Angular
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Importing RouterLink for navigation
import { SubscribeNavigationComponent } from '../subscribe-navigation/subscribe-navigation.component'; // Importing SubscribeNavigationComponent

@Component({
  // Component metadata
  selector: 'app-sidebar', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [RouterLink, SubscribeNavigationComponent], // Importing necessary components
  templateUrl: './sidebar.component.html', // Template URL for the component
  styleUrl: './sidebar.component.css' // CSS file URL for the component
})
export class SidebarComponent {
  // Class definition for SidebarComponent
}
