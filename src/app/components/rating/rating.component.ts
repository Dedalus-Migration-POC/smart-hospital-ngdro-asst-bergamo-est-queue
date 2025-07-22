import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  formGroup = new FormGroup({
    rating: new FormControl(''),

  })

  onSend() {
    console.log('+++form', this.formGroup.value);

  }
}
