// Importing necessary components from Angular
import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component'; // Importing DropdownComponent

@Component({
  // Component metadata
  selector: 'app-search-navbar', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [DropdownComponent], // Importing necessary components
  templateUrl: './search-navbar.component.html', // Template URL for the component
  styleUrl: './search-navbar.component.css' // CSS file URL for the component
})
export class SearchNavbarComponent {
  // Class definition for SearchNavbarComponent
}
