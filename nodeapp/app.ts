import {IActor} from './models';
import {groupActors} from './util';
const actors : Array<IActor> = [
    {
        name: 'Rajnikanth',
        age: 10,
        movies: ['Baasha']
    },
    {
        name: 'Vijay',
        age: 12,
        movies: ['Kathi']
    },
    {
        name: 'Ajith',
        age: 14,
        movies: ['Villain']
    }
];

actors
    .filter((actor: IActor) => actor.age > 10)
    .forEach((actor: IActor) => {
        console.log(`actor name is ${actor.name}`);
    });

const groupedActors = groupActors(actors);
console.log(JSON.stringify(groupedActors));
