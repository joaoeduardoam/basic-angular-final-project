import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponentComponent } from "./principal-component/principal-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-angular-final-project';
}
