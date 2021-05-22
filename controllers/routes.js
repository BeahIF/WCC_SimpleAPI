const Agendamento = require('../models/Agendamento')
module.exports = app => {
    app.put('/agendamentos/:id', (req,res)=>{
        const id = parseInt(req.params.id);
        const novoAgendamento = req.body;
        Agendamento.editar(id, novoAgendamento, res);
    });
    app.get('/agendamentos',(req,resp)=>{
        // resp.send("Servidor OK!")
        Agendamento.listagem(resp);
    });
    app.get('/agendamentos/:id',(req,res)=>{
        const id = parseInt(req.params.id);
        Agendamento.buscaPorId(id,res)
    })
   
    app.post('/agendamentos',(req,resp)=>{
        const agendamento = req.body;
        // console.log(agendamento)
        Agendamento.inserir(agendamento,resp);
        // resp.send(agendamento)
    })
};