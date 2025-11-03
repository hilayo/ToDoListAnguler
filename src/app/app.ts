import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListManager } from './list-manager/list-manager';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListManager],
  standalone: true,
  template: `
  <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>
    <app-list-manager/> 
`,
  styleUrl: './app.scss'
})
export class App {
  title = 'My todo list';

}
