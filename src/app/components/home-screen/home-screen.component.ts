// Importing necessary components from Angular
import { Component } from '@angular/core';
import { WholeNavbarComponent } from '../whole-navbar/whole-navbar.component'; // Importing WholeNavbarComponent
import { SidebarComponent } from '../sidebar/sidebar.component'; // Importing SidebarComponent
import { MainbodyComponent } from '../mainbody/mainbody.component'; // Importing MainbodyComponent

@Component({
  // Component metadata
  selector: 'app-home-screen', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [WholeNavbarComponent, SidebarComponent, MainbodyComponent], // Importing necessary components
  templateUrl: './home-screen.component.html', // Template URL for the component
  styleUrl: './home-screen.component.css' // CSS file URL for the component
})
export class HomeScreenComponent {
  // Class definition for HomeScreenComponent
}
