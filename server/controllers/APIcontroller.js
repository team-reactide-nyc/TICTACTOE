const request = require('request');

const APIcontroller = {
  getData: (req,res) => {
    console.log('nemo touched the butt!');
    request.get('https://pokeapi.co/api/v2/pokemon/pikachu/',(err,response)=>{
      res.status(200).send(response);
    })
  },
}
module.exports = APIcontroller;