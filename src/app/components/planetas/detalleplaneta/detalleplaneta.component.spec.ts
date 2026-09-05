import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleplanetaComponent } from './detalleplaneta.component';

describe('DetalleplanetaComponent', () => {
  let component: DetalleplanetaComponent;
  let fixture: ComponentFixture<DetalleplanetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleplanetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleplanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
