const Agendamento = require('../models/Agendamento')
module.exports = app => {
    app.get('/agendamentos',(req,resp)=>{
        // resp.send("Servidor OK!")
        Agendamento.listagem(resp);
    });
    app.post('/agendamentos',(req,resp)=>{
        const agendamento = req.body;
        // console.log(agendamento)
        Agendamento.inserir(agendamento,resp);
        // resp.send(agendamento)
    })
};