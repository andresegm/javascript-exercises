const findTheOldest = function(arr) {
    const calculateAge = (obj) => {
        return (obj.yearOfDeath ? (obj.yearOfDeath - obj.yearOfBirth) : (2022 - obj.yearOfBirth))
    }
    const arrSorted = arr.sort((a, b) => {
        if (calculateAge(a) > calculateAge(b)) {
            return -1
        } else {
            return 1
        }
    })
    return arrSorted[0]
};



// Do not edit below this line
module.exports = findTheOldest;
