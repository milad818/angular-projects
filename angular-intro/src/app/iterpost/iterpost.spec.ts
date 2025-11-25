import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iterpost } from './iterpost';

describe('Iterpost', () => {
  let component: Iterpost;
  let fixture: ComponentFixture<Iterpost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iterpost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iterpost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
