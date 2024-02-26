import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  showDropdownMenu: boolean = false;

  toggleDropdownMenu() {
    this.showDropdownMenu = !this.showDropdownMenu;
  }
}
