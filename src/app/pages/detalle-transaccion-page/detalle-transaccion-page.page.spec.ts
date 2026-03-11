import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTransaccionPagePage } from './detalle-transaccion-page.page';

describe('DetalleTransaccionPagePage', () => {
  let component: DetalleTransaccionPagePage;
  let fixture: ComponentFixture<DetalleTransaccionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTransaccionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
