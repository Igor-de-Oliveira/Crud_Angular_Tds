import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisListComponent } from './locais-list.component';

describe('LocaisListComponent', () => {
  let component: LocaisListComponent;
  let fixture: ComponentFixture<LocaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
