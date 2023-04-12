restaurant = {
    name: 'sheraten',
    guestcapasity: 75,
    guestcount: 0,
    checkAvailebility: function(partysize){// creating a method for an object
        let seatleft = this.guestcapasity - this.guestcount
        return seatleft >= partysize
    },

    seatParty: function(seatnumber){
        this.guestcount = this.guestcount + seatnumber
    },

    removeParty: function(number){
        this.guestcount = this.guestcount - number
        
    }
}

restaurant.seatParty(72)

//let isavailable = restaurant.checkAvailebility(100)//calling object of a method(accesing attribute of a method)
console.log(restaurant.checkAvailebility(4)) //75-72

restaurant.removeParty(5)
console.log(restaurant.checkAvailebility(4))
