const { json } = require('body-parser')
const Cruzeiroservice = require('../services/CruzeiroService')

module.exports = {
    buscartodos: async (req, res)=> {
        let json = {error:'', result:[]}

        let planos = await Cruzeiroservice.buscartodos()

        for (let i in planos){
            json.result.push({
                id_plano: planos[i].id_plano,
                professor_nome: planos[i].professor_nome,
                area_nome: planos[i].area_nome,
                componente_nome: planos[i].componente_nome,
                turma: planos[i].turma,
                n_aula: planos[i].n_aula,
                slide: planos[i].slide,
                objetivo: planos[i].objetivo

            })
        }
        res.json(json)
    }
    
}