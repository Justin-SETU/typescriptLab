import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Justin')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'HR'  ))

function sort<T>(arr: T[], sorter: (a: T, b: T) => number): T[] {
    return [...arr].sort(sorter); // Create a sorted copy of the array
  }

  // Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);



