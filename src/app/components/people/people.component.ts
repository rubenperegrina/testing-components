import { Component } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Person[] = [
    new Person('Rubén', 'Peregrina', 23, 1, 1),
    new Person('Albert', 'Peregrina', 12, 2, 3),
  ];
  selectedPerson: Person | null = null;

  choose(person: Person) {
    this.selectedPerson = person;
  }
}