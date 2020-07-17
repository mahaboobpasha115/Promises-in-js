//Promise using an example to check whether the room is cleaned or not.

let promiseToCleanTheRoom= new Promise(function(resolve , reject){
    let isClean=true;

    if (isClean){
        resolve(' clean');
    }else {
        reject(' not clean');
    }
});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('the Room is'+fromResolve); 
}).catch(function(fromReject){
console.log('the Room is'+fromReject);

})



//Nested of Promises

let cleanRoom= function(){
    return new Promise(function(resolve,reject){
        resolve(' cleaned the Room');
    });
};

let removeGarbage= function(message){
    return new Promise(function(resolve,reject){
     resolve(message +' remove Garbage');
    });
};

 let winIcecream= function(message){
     return new Promise(function(resolve,reject){
      resolve(message+' won Icecream');  
     });
 }; 

cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return winIcecream(result);
}).then(function(result){
    console.log('finished'+result);
    
})

