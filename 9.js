// Object Destructuring

const band = {
    bandName : "guchi",
    famousSong : "stairway to heaven"
}
// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName,famousSong);

const {bandName: var1, famousSong: var2} = band;
console.log(var1,var2);