import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import { PersonComponent } from './../person/person.component';
import { Person } from './../../models/person.model';
import { By } from '@angular/platform-browser';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleComponent, PersonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list app-person components', () => {
    // Arrange
    component.people = [
      new Person('Rubén', 'Peregrina', 23, 1, 1),
      new Person('Albert', 'Peregrina', 12, 2, 3),
    ];
    // Act
    fixture.detectChanges();
    const debugElement = fixture.debugElement.queryAll(By.css('app-person'));
    // Assert
    expect(debugElement.length).toEqual(2);
  });
});