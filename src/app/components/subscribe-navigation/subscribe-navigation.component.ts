import { Component } from '@angular/core';
import { WholeNavbarComponent } from '../whole-navbar/whole-navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-subscribe-navigation',
  standalone: true,
  imports: [WholeNavbarComponent,SidebarComponent],
  templateUrl: './subscribe-navigation.component.html',
  styleUrl: './subscribe-navigation.component.css'
})
export class SubscribeNavigationComponent {

}
