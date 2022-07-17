const DadosPessoais = () => {
  return (
    <div id="dps" className="dado">
      <div className="center-v">
        <span className="material-icons icon"> person</span>
        <h3>Dados Pessoais</h3>
      </div>
      <p>Nome de usuário: Peter Benjamin Parker</p>
      <p>Nome da mãe: Mary Parker</p>
      <p>Data de nascimento: 29-01-1993</p>
      <p>Idade: 29</p>
      <p>RG: 1.234.567</p>
      <p>Orgão Emissor: SDS</p>
      <p>CPF: 98765432109</p>
      <p>Nacionalidade: Brasileira</p>
      <div className="center-v">
        <span className="material-icons icon"> place </span>
        <h3>Endereço</h3>
      </div>
      <p>Rua Salatiel Frutos de Macedo, 39, Centro, Igarassu-PE</p>
      <p>CEP: 53610345</p>
      <div className="center-v">
        <span className="material-icons icon"> phone </span>
        <h3>Contato</h3>
      </div>
      <p>Email: peter.b.parker@gmail.com</p>
      <p>Telefone: 81 9.9988-4433</p>
    </div>
  );
};
export default DadosPessoais;
