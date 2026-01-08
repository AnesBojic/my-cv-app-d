import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// Importuj svoju komponentu (putanja zavisi gdje si je kreirao)
import { MyCvComponent } from './my-cv/my-cv.component'; // <-- DODAJ OVO

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet, MyCvComponent], // <-- I OVO
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moj-cv';
}
