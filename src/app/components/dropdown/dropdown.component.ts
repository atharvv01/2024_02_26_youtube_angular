// Importing necessary components and modules from Angular
import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Importing NgIf directive for conditional rendering
import { RouterLink } from '@angular/router'; // Importing RouterLink for navigation

@Component({
  // Component metadata
  selector: 'app-dropdown', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [NgIf, RouterLink], // Importing necessary modules and components
  templateUrl: './dropdown.component.html', // Template URL for the component
  styleUrl: './dropdown.component.css' // CSS file URL for the component
})
export class DropdownComponent {
  // Class definition for DropdownComponent

  // Boolean variable to track the visibility of the dropdown menu
  showDropdownMenu: boolean = false;

  // Function to toggle the visibility of the dropdown menu
  toggleDropdownMenu() {
    this.showDropdownMenu = !this.showDropdownMenu;
  }
}
