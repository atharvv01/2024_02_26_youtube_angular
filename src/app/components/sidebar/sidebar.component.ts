import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubscribeNavigationComponent } from '../subscribe-navigation/subscribe-navigation.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,SubscribeNavigationComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
