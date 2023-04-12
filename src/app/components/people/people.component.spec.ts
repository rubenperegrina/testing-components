import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Person } from './../../models/person.model';
import { PersonComponent } from './../person/person.component';
import { PeopleComponent } from './people.component';

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

  it('should raise seleted event when clicked', () => {
    // Arrange
    const buttonDe = fixture.debugElement.query(By.css('app-person .btn-choose'));
    // Act
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    expect(component.selectedPerson).toEqual(component.people[0]);
  });

  it('should render the selectedPerson', () => {
    // Arrange
    const buttonDe = fixture.debugElement.query(By.css('app-person .btn-choose'));
    // Act
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    const liDe = fixture.debugElement.query(By.css('.selectedPerson ul > li'));
    // Assert
    expect(component.selectedPerson).toEqual(component.people[0]);
    expect(liDe.nativeElement.textContent).toContain(component.selectedPerson?.name);
  });
});