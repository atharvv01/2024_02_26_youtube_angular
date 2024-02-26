// Importing necessary components and modules from Angular
import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Importing NgIf directive for conditional rendering
import { DropdownComponent } from '../dropdown/dropdown.component'; // Importing DropdownComponent
import { CategoryNavbarComponent } from '../category-navbar/category-navbar.component'; // Importing CategoryNavbarComponent
import { SearchNavbarComponent } from '../search-navbar/search-navbar.component'; // Importing SearchNavbarComponent

@Component({
  // Component metadata
  selector: 'app-whole-navbar', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [NgIf, DropdownComponent, CategoryNavbarComponent, SearchNavbarComponent], // Importing necessary modules and components
  templateUrl: './whole-navbar.component.html', // Template URL for the component
  styleUrl: './whole-navbar.component.css' // CSS file URL for the component
})
export class WholeNavbarComponent {
  // Class definition for WholeNavbarComponent
}
