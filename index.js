// function Monday(){
// //     console.log('Go for a five mile run');
// //     console.log('Pump iron');
// // }

// // Monday()

// // function Tuesday (){
// //     console.log('Go for a five-mile run');
// //     console.log('Swim 40 laps');
// // }

// // Tuesday()


// // function Wednesday(){
// //     console.log('Go for a five mile run');
// //     console.log('Go for a five mile run');
// //     }

// // Wednesday()

// // function Thursday(){
// //     console.log('Go for a five mile run');
// //     console.log('Pump iron');
// // }

// // Thursday()

// // function Friday(){
// //     console.log('Go for a five mile run');
// //     console.log('Swim 40 laps');
// // }

// // Friday()

// // function Monday(){
// //     console.log('Go for a five mile run');
// //     console.log('Pump iron');
// // }

// function runFiveMile(){
//     console.log('Go for a five mile run');
// }

// runFiveMile()

// function Monday(){
//     run
//     console.log('Pump iron');
// }

// Monday()

// function Tuesday (){
//     runFiveMile()
//     console.log('Swim 40 laps');
// }

// Tuesday()


// function Wednesday(){
//     runFiveMile()
//     console.log('Go for a five mile run');
//     }

// Wednesday()

// function Thursday(){
//     runFiveMile()
//     console.log('Pump iron');
// }

// Thursday()

// function Friday(){
//     runFiveMile()
//     console.log('Swim 40 laps');
// }

// Friday()


// Observed that days of the weeek as function do not follow camelCasing standard for naming functions

// function swimFortyLaps(){
//     console.log('Swim 40 laps');
// }

// function liftWeights(){
//     console.log('Pump Iron');
// }

// function runFiveMile(){
//     console.log('Go for a five mile run');
// }

// runFiveMile()

// function Monday(){
//     runFiveMile();
//     console.log('Pump iron');
// }

// Monday()

// function Tuesday (){
//     runFiveMile();
//     console.log('Swim 40 laps');
// }

// Tuesday()


// function Wednesday(){
//     runFiveMile()
//     console.log('Go for a five mile run');
//     }

// Wednesday()

// function Thursday(){
//     runFiveMile()
//     console.log('Pump iron');
// }

// Thursday()

// function Friday(){
//     runFiveMile()
//     console.log('Swim 40 laps');
// }

// Friday()


// Observed that days of the weeek as function do not follow camelCasing standard for naming functions


// function runFiveMile(){
//     console.log('Go for a five mile run');
// }

// function swimFortyLaps(){
//     console.log('Swim 40 laps');
// }

// function liftWeights(){
//     console.log('Pump Iron');
// }


// function Monday(){
//     runFiveMile();
//     liftWeights();
// }

// Monday()

// function Tuesday (){
//     runFiveMile();
//     swimFortyLaps();
// }

// Tuesday()

// function Wednesday(){
//     runFiveMile();
//     runFiveMile();
//     }

// Wednesday()

// function Thursday(){
//     runFiveMile();
//     liftWeights();    
// }

// Thursday()

// function Friday(){
//     runFiveMile();
//     swimFortyLaps();
// // }
// //  Friday   
// //  function liftWeights(){
// //     console.log('Pump Iron');
// //     }

// //  function runFiveMile(){
// //     console.log('Go for a five mile run');
// //     }
    
// //     runFiveMile()
    
// //     function Monday(){
// //         runFiveMile();
// //         console.log('Pump iron');
// //     }
    
// //     Monday()
    
// //     function Tuesday (){
// //         runFiveMile();
// //         console.log('Swim 40 laps');
// //     }
    
// //     Tuesday()
    
    
// // //     function Wednesday(){
// // //         runFiveMile()
// // //         console.log('Go for a five mile run');
// // //         }
    
// // //     Wednesday()
    
// // //     function Thursday(){
// // //         runFiveMile()
// // //         console.log('Pump iron');
// // //     }
    
// // //     Thursday()
    
// // //     function Friday(){
// // //         runFiveMile();
// // //         swimFortyLaps();
// // //     }
    
// // //     Friday()


 
// // function runFiveMile(){
// //     console.log('Go for a five mile run');
// // }

// // function swimFortyLaps(){
// //     console.log('Swim 40 laps');
// // }

// // function liftWeights(){
// //     console.log('Pump Iron');
// // }

// // // function exerciseRoutine(){
// // //     runFiveMile();
// // //     postRunACtivity();   
// // // }

// // // function exerciseRoutine(postRunACtivity){
// // //     runFiveMile();
// // //     postRunACtivity();
// // // }

// // function Monday(){
// //     exerciseRoutine(liftWeights);
// // }

// // // function postRunACtivity(){
// // // } I didn't see this function


// // exerciseRoutine(function(){
// //     console.log("Stretch! Work that core!")
// // });

// // exerciseRoutine()



// function morningRoutine(excercise){
//     let breakfast;

//     if (excercise === liftWeights){
//         breakfast = 'protein bar';
//     } else if (excercise === swimFortyLaps){
//         breakfast ='kale smoothie';
//     } else {
//         breakfast ='granola'
//     }


//     excerciseRoutine(excercise);

//     return function(){
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
// }

function receivesAFunction (returnsANamedFunction) {
returnsANamedFunction()

}

function returnsANamedFunction(){
    return function namedFunction (){
        console.log('This is a named function returned');
    };
}

function returnsAnAnonymousFunction(){

return function (){
    console.log('This is an anonymous function returned');
};
}