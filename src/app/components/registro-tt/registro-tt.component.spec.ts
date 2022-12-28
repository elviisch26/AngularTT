import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTtComponent } from './registro-tt.component';

describe('RegistroTtComponent', () => {
  let component: RegistroTtComponent;
  let fixture: ComponentFixture<RegistroTtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
