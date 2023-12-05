const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) =>{
        const oldestAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (currentAge > oldestAge){
            return currentPerson;
        }
        else{
            return oldestPerson;
        }
    });
};


function calculateAge(birthYear, deathYear){
    if(!deathYear){
        deathYear = new Date().getFullYear();
    }

    let age = deathYear - birthYear;
    return age;

};

// Do not edit below this line
module.exports = findTheOldest;
