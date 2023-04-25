import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandComponent } from './marchand.component';

describe('MarchandComponent', () => {
  let component: MarchandComponent;
  let fixture: ComponentFixture<MarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
