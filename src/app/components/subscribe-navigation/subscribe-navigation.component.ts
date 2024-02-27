// Importing necessary components from Angular
import { Component } from '@angular/core';
import { WholeNavbarComponent } from '../whole-navbar/whole-navbar.component'; // Importing WholeNavbarComponent
import { SidebarComponent } from '../sidebar/sidebar.component'; // Importing SidebarComponent

@Component({
  // Component metadata
  selector: 'app-subscribe-navigation', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [WholeNavbarComponent, SidebarComponent], // Importing necessary components
  templateUrl: './subscribe-navigation.component.html', // Template URL for the component
  styleUrl: './subscribe-navigation.component.css' // CSS file URL for the component
})
export class SubscribeNavigationComponent {
  // Class definition for SubscribeNavigationComponent
}
