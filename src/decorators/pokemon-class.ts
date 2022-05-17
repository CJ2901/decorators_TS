function printToConsole(constructor:Function) {
    console.log(constructor);
}

const bloquearPrototipo = function (constructor:Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;
        descriptor.value = ( id:number ) => {
            if ( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe ser entre 1 - 800');
            } else {
                return originalMethod(id);
            }
        }
        
    }
}

const printToConsoleConditional = ( print : boolean = false ) : Function => {
    if (print) {
        return printToConsole;  
    } else {
        return () => {}
    }
}

function readonly(isWriteable:boolean = true): Function {
    return function (target:any, propertyKey:string) {
        const descriptor : PropertyDescriptor = {
            get(){
                console.log( this );
                return 'Alexander';
            }  ,     
            set(this, val){
                console.log(this,val);
                Object.defineProperty( this, propertyKey,{
                    value: val,
                    writable: !isWriteable,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}

// @printToConsole
// @printToConsoleConditional( true )
// @bloquearPrototipo

export class Pokemon {

    // FUNCIÓN READ ONLY PARA BLOQUEAR MODIFICACION DEL CÓDIGO
    @readonly(true)
    public publicApi: string = 'https://pokeapi.co';
    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    savePokemonToDB( id:number ){
        console.log(`Pokemon guardado en la base de datos. ID : ${id}`);
    }

}