import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villain , Hero} from '../interfaces';


// const name:string = 'Alexander';

// console.log( genericFunction(3.1416).toFixed(2) );
// console.log( genericFunction( name ).toUpperCase());
// console.log( genericFunction( new Date() ).getDate() );

// console.log( genericFunctionArrow(3.1416).toFixed(2) );
// console.log( genericFunctionArrow( name ).toUpperCase());
// console.log( genericFunctionArrow( new Date() ).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: `Wade 'El Guapo' Wilson`,
    dangerLevel: 300
} 

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel );
