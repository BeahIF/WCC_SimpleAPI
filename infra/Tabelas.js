class Tabelas {
    init(conexao){
        this.conexao=conexao;
        this.criarAgendamento();
    }
    // const teste=2
    criarAgendamento(){
        // 'CREATE TABLE ${teste}
        const sql = 'CREATE TABLE IF NOT EXISTS agendamentos (id int NOT NULL AUTO_INCREMENT,  nome_cliente varchar(50) NOT NULL, service varchar(50) NOT NULL, status varchar(20) NOT NULL, data_service date NOT NULL , data_agendamento date NOT NULL, PRIMARY KEY(id))'
        this.conexao.query(sql, error =>{
            if(error){
                throw error;
            }
            
        });

    }
}
module.exports = new Tabelas;