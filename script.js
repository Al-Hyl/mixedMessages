let type = ['AMRAP', 'EMOM', 'For Time'];
let cardio = ['Run', 'Cycle', 'Row', 'Ski', 'Assault Bike', 'Double Unders'];
let gynmaistics = ['Ring Muscle ups', 'Handstand Pushups', 'Strict Pullups', 'Toes to Bar', 'Handstand Walk'];
let weights = ['Bench Press', 'Snatch', 'Clean and Jerk', 'Deadlift', 'Squat'];

// to get a random duration once a type of workout is randomly picked
const typeDuration = (cardioType) => {
    switch(cardioType){
        case 'AMRAP':
            return Math.round(Math.random()* (15 - 8) + 8);
            break;
        case 'EMOM':
            return Math.round(Math.random()*(12 - 6) + 6);
            break;
        case 'For Time':
            return Math.round(Math.random()* (18 - 12) + 12);
            break;
        default:
            return error;
            break;
    }
}

// To get a radom distance to do when a random cardio type is selected
const CardioDistance = (cardioType) => {
    switch(cardioType){
        case 'Run':
            return Math.round(Math.random()* (800 - 100) + 100);
            break;
        case 'Cycle':
            return Math.round(Math.random()* (1600 - 400) + 400);
            break;
        case 'Row':
            return Math.round(Math.random()* (800 - 100) + 100);
            break;
        case 'Ski':
            return Math.round(Math.random()* (800 - 100) + 100);
            break;
        case 'Assault Bike':
            return Math.round(Math.random()* (800 - 100) + 100);
            break;
        case 'Double Unders':
            return Math.round(Math.random()* (100 - 20) + 20);
            break;
        default:
            return error;
            break;
    }
}

// To get a random rep scheme when a random gymantics type is selected
const gymnasticsReps = (gymnasticsType) => {
    switch(gymnasticsType){
        case 'Ring Muscle ups':
            return Math.round(Math.random()* 10);
            break;
        case 'Handstand Pushups':
            return Math.round(Math.random()* 10);
            break;
        case 'Strict Pullups':
            return Math.round(Math.random()* 12);
            break;
        case 'Toes to Bar':
            return Math.round(Math.random()* 15);
            break;
        case 'Handstand Walk':
            return Math.round(Math.random()* (50 - 10) + 10);
            break;
        default:
            return error;
            break;
    }
}

// To get a random weight scheme when a random weights type is selected
const weightsReps = (weightsType) => {
    switch(weightsType){
        case 'Bench Press':
            return Math.round(Math.random()* 12);
            break;
        case 'Snatch':
            return Math.round(Math.random()* 6);
            break;
        case 'Clean and Jerk':
            return Math.round(Math.random()* 8);
            break;
        case 'Deadlift':
            return Math.round(Math.random()* 12);
            break;
        case 'Squat':
            return Math.round(Math.random()* 10);
            break;
        default:
            return error;
            break;
    }
}

// Selects a type of workout from each array and then uses that to get the reps/distance. prints workout.
const generateWorkout = () => {
    workoutType = type[Math.floor(Math.random() * type.length)];
    cardioType = cardio[Math.floor(Math.random() * cardio.length)];
    gymnasticsType = gynmaistics[Math.floor(Math.random() * gynmaistics.length)];
    weightsType = weights[Math.floor(Math.random() * weights.length)];

    return 'The workout is a ' + workoutType + ' for a duration of ' + typeDuration(workoutType) + ' Minutes:\n\t' 
    + cardioType + ' x ' + CardioDistance(cardioType) + ' Meters\n\t' 
    + gymnasticsType + ' x ' + gymnasticsReps(gymnasticsType) + ' Reps\n\t'
    + weightsType + ' x ' + weightsReps(weightsType) + ' Reps\n\t';

}

console.log(generateWorkout());