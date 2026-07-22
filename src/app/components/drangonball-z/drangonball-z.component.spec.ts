import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrangonballZComponent } from './drangonball-z.component';

describe('DrangonballZComponent', () => {
  let component: DrangonballZComponent;
  let fixture: ComponentFixture<DrangonballZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrangonballZComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrangonballZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
