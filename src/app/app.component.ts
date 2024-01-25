import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-app-homework';

  constructor(private router: Router){}

  goToTamplate(): void{
    this.router.navigate(['tamplate']);
  }
}
