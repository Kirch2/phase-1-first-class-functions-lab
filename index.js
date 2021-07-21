// Code your solution in this file!
//['Sally', 'Bob', 'Freddy', 'Claudia']


const returnFirstTwoDrivers = drivers => {
    return [
        drivers[0],
        drivers[1]
    ]

}

const returnLastTwoDrivers = drivers => {
    return [
        drivers[2],
        drivers[3]
    ]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = x => {
    return function (fare) {
        return x * fare;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
}






