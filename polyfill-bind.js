//Polyfill is nothing but support to older browsers which doesn't have new methods.
// we are here writing polyfill_bind() method that will work on all the functions.
// this willl be working same as the bind()

let person1={
    firstName:"Pawan",
    lastName:"Kashyap"
}


function printFullName(city,state,country){
    console.log(this.firstName+" "+this.lastName+" from " + city+", "+state+", ",country);
}

Function.prototype.polyfill_bind=function(...args1){
    let obj = this 
    let params=args1.slice(1)
    return function(...args2){
        obj.apply(args1[0],[...params,...args2])        

    }
}

let polyfill_bind_printFullName=printFullName.polyfill_bind(person1,"Yamunanagar","Haryana")
polyfill_bind_printFullName("India")