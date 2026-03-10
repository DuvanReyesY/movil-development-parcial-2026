import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  standalone: false
})
export class DateFieldComponent {

  @Input() label: string = 'Fecha';
  @Input() value: string | null = null;
  @Input() error: string = '';

  @Output() onChange = new EventEmitter<any>();

}