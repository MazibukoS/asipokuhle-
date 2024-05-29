import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  submitForm() {
    // Here you can handle form submission logic like sending data to backend or displaying a success message.
    console.log('Form submitted!');
  }
}
