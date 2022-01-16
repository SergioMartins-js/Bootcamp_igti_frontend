var aluno1 = {
  matricula: 787878,
  nome: "Sérgio Martins",
  curso: "Bootcamp Front End", //Separados por Vírgula.
  Ativo: true,
};

console.log(aluno1.nome); //Para acessar os valores das variaveis colocar o nome global.(variavel)

aluno1.dataNascimento = "18/08/2020"; //assim você adciona mais uma variavel a variavel global dinamicamente.

delete aluno1.nome; //(delete) para deletar uma variavél.

var x = null; //null é um valor nulo que não pode ter valor;

// arrays

var frutas = ["banana", "Laranja", "melão"];

//para adicionar itens no array basta colocar o nome da varial ."PONTO"push e o nome da fruta.
