const swapi = require('swapi-node');
const polyglot = require('../helpers/dictionary');

class SwapiService{
    constructor(){}

    async getDataFromSWAPI(id){
        let newData = {};
        const data = await swapi.people({ id });
        const props = Object.keys(data);
        const values = Object.values(data);
        for (let i = 0; i < props.length; i++) {
            newData[polyglot.t(props[i])] = values[i]    
        }
        return {
            status: 200,
            data: newData
        }
    } 

}

const swapiService = new SwapiService();


module.exports = {
    swapiService
}