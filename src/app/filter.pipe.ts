import { Pipe, PipeTransform } from '@angular/core';
import { User } from './model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: User[], filterString: string): User[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: User[] = [];
    for (let user of value) {
      if (user['name'].toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }
}
