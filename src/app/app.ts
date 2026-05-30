import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar}
from './layouts/navbar/navbar';

import { SidebarComponent }
from './layouts/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    SidebarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title='ANgular App'
}
