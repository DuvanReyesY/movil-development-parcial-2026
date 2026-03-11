import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTransaccionesPagePage } from './lista-transacciones-page.page';

describe('ListaTransaccionesPagePage', () => {
  let component: ListaTransaccionesPagePage;
  let fixture: ComponentFixture<ListaTransaccionesPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTransaccionesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
