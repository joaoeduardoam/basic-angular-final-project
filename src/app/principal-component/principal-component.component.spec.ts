import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponentComponent } from './principal-component.component';

describe('PrincipalComponentComponent', () => {
  let component: PrincipalComponentComponent;
  let fixture: ComponentFixture<PrincipalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
