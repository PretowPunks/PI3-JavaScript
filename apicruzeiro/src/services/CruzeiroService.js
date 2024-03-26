const db = require('../db')

module.exports = {
    buscartodos: () =>{
        return new Promise((aceito, rejeitado)=>
        db.query('SELECT * FROM planos', (error, results)=>{
            if (error) {rejeitado(error); return;}
            aceito(results)
        
        }))
    }
}