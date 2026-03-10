import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioTransaccionModalPage } from './formulario-transaccion-modal.page';

describe('FormularioTransaccionModalPage', () => {
  let component: FormularioTransaccionModalPage;
  let fixture: ComponentFixture<FormularioTransaccionModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTransaccionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
