// Importing necessary components from Angular
import { Component } from '@angular/core';
import { WholeNavbarComponent } from '../whole-navbar/whole-navbar.component'; // Importing WholeNavbarComponent
import { SearchNavbarComponent } from '../search-navbar/search-navbar.component'; // Importing SearchNavbarComponent
import { SettingsSidebarComponent } from '../settings-sidebar/settings-sidebar.component'; // Importing SettingsSidebarComponent

@Component({
  // Component metadata
  selector: 'app-settings', // Selector for the component
  standalone: true, // Marking the component as standalone
  imports: [WholeNavbarComponent, SearchNavbarComponent, SettingsSidebarComponent], // Importing necessary components
  templateUrl: './settings.component.html', // Template URL for the component
  styleUrl: './settings.component.css' // CSS file URL for the component
})
export class SettingsComponent {
  // Class definition for SettingsComponent
}
