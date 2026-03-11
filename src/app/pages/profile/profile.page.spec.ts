import { ComponentFixture, TestBed } from '@angular/core/testing';
import { profilePage } from './profile.page';

describe('ProfilePage', () => {
  let component: profilePage;
  let fixture: ComponentFixture<profilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(profilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
