import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
})
export class SelectFieldComponent {

  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() value: any;
  @Input() placeholder: string = 'Seleccionar...';
  @Input() error: string = '';
  @Output() onChange = new EventEmitter<any>();

}
