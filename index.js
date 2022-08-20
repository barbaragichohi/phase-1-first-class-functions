function receivesAFunction (spy) {
    return spy();
}

function returnsANamedFunction (){
    return function named(){
    
    }
}

console.log (returnsANamedFunction());


    // function returnsAnAnonymousFunction(){
    // return function (){
    //     console.log('anonymous')
    // }
  
    // }


    function returnsAnAnonymousFunction () {
        return function () {

        }
    }
    console.log (returnsAnAnonymousFunction());
    