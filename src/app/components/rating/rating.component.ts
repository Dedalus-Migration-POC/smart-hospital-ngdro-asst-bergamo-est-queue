import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() formGroup!: FormGroup
  @Output() sendRating = new EventEmitter()

  onSend() {
    this.sendRating.emit()
  }
}
