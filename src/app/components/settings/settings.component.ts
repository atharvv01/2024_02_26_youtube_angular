import { Component } from '@angular/core';
import { WholeNavbarComponent } from '../whole-navbar/whole-navbar.component';
import { SearchNavbarComponent } from '../search-navbar/search-navbar.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [WholeNavbarComponent,SearchNavbarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
