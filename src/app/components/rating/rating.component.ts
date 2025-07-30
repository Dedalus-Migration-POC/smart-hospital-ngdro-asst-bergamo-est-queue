import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { DesignAngularKitModule } from 'design-angular-kit';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule, DesignAngularKitModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent implements OnInit {
  @Input() formGroup!: FormGroup
  @Output() sendRating = new EventEmitter()

  element = document.getElementsByTagName("legend");

  ngOnInit(): void {
    this.element[0].style.display = "none";
  }


  onSend() {
    this.sendRating.emit()
  }
}
