// challenge area

let isGuestOneVegun = false
let isGuestTwoVegun = true

if (isGuestOneVegun && isGuestTwoVegun){
    console.log('offer only vegun dishes')
}
else if(isGuestOneVegun || isGuestTwoVegun){
    console.log('make sure to offer up some vegun dishes')
}else{
    console.log('offer up anything on the menu')
}