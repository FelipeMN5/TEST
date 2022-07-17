const DadosProfissionais = () => {
  return (
    <div id="dpf" className="dado">
      <div className="center-v">
        <span className="material-icons icon"> phone </span>
        <h3>Dados para contato</h3>
      </div>
      <p>Nome do prestador: Peter Parker</p>
      <p>Email: peter.b.parker@gmail.com</p>
      <p>CPF: 98765432109</p>
      <div className="center-v">
        <span className="material-icons icon"> switch_account </span>
        <h3>Função</h3>
      </div>
      <p>Função: Médico</p>
      <p>Conselho: Conselho Regional de Medicina</p>
      <p>UF: PE</p>
      <p>Número: 1234567890</p>
      <div className="center-v">
        <span className="material-icons icon"> star </span>
        <h3>Especialidades</h3>
      </div>
      <p>Principal: ANESTESIOLOGIA</p>
      <p>Outras: NEUROLOGIA</p>
    </div>
  );
};
export default DadosProfissionais;
