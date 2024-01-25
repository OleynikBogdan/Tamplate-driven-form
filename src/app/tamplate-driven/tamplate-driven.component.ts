import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tamplate-driven',
  templateUrl: './tamplate-driven.component.html',
  styleUrl: './tamplate-driven.component.scss'
})
export class TamplateDrivenComponent {
countries = ['USA', 'Ukraine', 'Poland', 'Zimbabue'];
paymentys = ['10$', '20$', '50$', '100$', '500$', '20000$'];
  person = {
first: 'Valentin',
last: 'Sidorov',
mail: 'valSid@gus.com',
company: 'bolnitchka',
country: 'Ukraine',
payments: null,
else: 'blablabla'
} 

  onSubmit(tamplateForm: NgForm): void{
    if (tamplateForm.valid) {
      console.log(this.person);
      console.log(tamplateForm); 
    }
  }
}
