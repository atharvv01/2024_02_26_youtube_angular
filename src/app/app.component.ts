import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // The CSS selector that will be used to apply this component's styles and template
  standalone: true, // Indicates that this component should not be included in any module's declarations
  imports: [RouterOutlet], // The list of directives, components, and pipes that are used within this component
  templateUrl: './app.component.html', // The path to the HTML template file for this component
  styleUrls: ['./app.component.css'] // The path to the CSS file for this component
})
export class AppComponent {
  title = 'Youtube_angular'; // The title of the application, which will be displayed in the browser's title bar
}