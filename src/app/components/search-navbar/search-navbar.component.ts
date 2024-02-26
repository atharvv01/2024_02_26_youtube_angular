import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-search-navbar',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './search-navbar.component.html',
  styleUrl: './search-navbar.component.css'
})
export class SearchNavbarComponent {

}
