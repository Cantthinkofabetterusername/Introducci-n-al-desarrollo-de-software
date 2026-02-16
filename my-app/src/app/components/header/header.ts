import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  toggleModo() {
    const body = document.body;
    body.classList.toggle("bg-light");
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");
  }
}
