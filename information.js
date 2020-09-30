const cowsay = require('cowsay');

let myInformation = {
  namee: 'Karen',
  location: 'Lyon Campus',
};

const myLocation = () => {
  console.log(
    cowsay.say({
      text: `${myInformation.namee}, ${myInformation.location}`,
      e: 'Oo',
      T: 'u',
    })
  );
};
module.exports = myLocation;
