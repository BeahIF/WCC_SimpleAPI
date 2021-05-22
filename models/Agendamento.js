const moment = require('moment');
const conexao = require('../infra/conexao');
class Agendamento{
    listagem(resp){
        const sql = 'SELECT * FROM agendamentos';
        conexao.query(sql, (error, results)=>{
            if(error){
                resp.status(400).json(error)
            }
            resp.status(201).json(results)
        })
    }
    buscaPorId(id, res){
        const sql = 'SELECT * FROM agendamentos WHERE id=?';
        conexao.query(sql,id,(error,results)=>{
            if(error){
                res.status(400).json(error)
            }
            res.status(201).json(results)
        })
    }
    editar(id, novoAgendamento, res){
        const sql = 'UPDATE agendamentos SET ? WHERE id = ?';
        conexao.query(sql,id, novoAgendamento, (error, results)=>{
            if(error){
                throw error
            };
            return res.status(201).json(results)
        });
    }
    inserir(agendamento,resp){
        const sql = 'INSERT INTO agendamentos SET ?';
        const data_service = moment(agendamento.data_service).format('YYYY-MM-DD');
        const data_agendamento = moment().format('YYYYY-MM-DD');
        const agendamentoComData = {...agendamento, data_agendamento, data_service};
        const ehDataValida = moment(agendamento.data_service).isSameOrAfter(data_agendamento);
        const ehNomeCliente = agendamento.nome_cliente.length >2;
        const validacoes = [{
            nome:"data_servico",
            valido:ehDataValida,
            mensagem:"Data do agendamento deve ser igual ou superior a data de hoje!"
        },{nome:"nome_cliente",
            valido:ehNomeCliente,
            mensagem:"O nome do cliente deve ter ao menos 3 dígitos"
        }];
        const errors = validacoes.filter(campo=>!campo.valido);
        if(errors.length>0){
            return resp.status(400).json(errors);
        }
        conexao.query(sql, agendamentoComData,(error, results)=>{
            if(error){
                throw error
            };
            // console.log(results);
            return resp.status(201).json(results)
        });
    }
}
module.exports = new Agendamento();