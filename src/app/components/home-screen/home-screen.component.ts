import { Component } from '@angular/core';
import { WholeNavbarComponent } from '../whole-navbar/whole-navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainbodyComponent } from '../mainbody/mainbody.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [WholeNavbarComponent,SidebarComponent,MainbodyComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

}
