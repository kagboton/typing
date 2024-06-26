import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  randomText: string = faker.lorem.sentence({ min: 3, max: 5 });
  enteredText: string = '';
  

  onInput(event: Event) {
    this.enteredText = (event.target as HTMLInputElement).value;
  }

  compare(randomLetter: string, enteredLetter: string) : string { 
    if (!enteredLetter) return 'pending';
    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }
}
