//1.	Pense na melhor forma de representar tais contas, e por quê? 
//(discutir coma equipe sobre as diferentes estruturas e qual é a mais conveniente)

let conta_bancaria = {
	numero_da_conta: 0,
	tipo_de_conta: "",
	saldo: 0,
	titular_da_conta: ""
}

//2. Uma vez decidido qual será o tipo de dados para representar as contas das contas,
//crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.

let conta_teste = {
	numero_da_conta: 1213174,
	tipo_de_conta: "Conta Corrente",
	saldo: 1500,
	titular_da_conta: "Marcelo Bissolati"
}
console.log("Exibição de conta teste: ");
console.log(conta_teste);

//3. Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar.
// Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.

function Conta_cliente(numero_da_conta, tipo_de_conta, saldo, titular_da_conta) {
	this.numero_da_conta = numero_da_conta;
	this.tipo_de_conta = tipo_de_conta;
	this.saldo = saldo;
	this.titular_da_conta = titular_da_conta;
}
console.log();
console.log("----------------------------------------------------------------------------");
console.log();

let cliente001 = new Conta_cliente(5486273622, "Conta Corrente", 27771, "Abigael Natte");
let cliente002 = new Conta_cliente(1183971869, "Conta Poupança", 8675, "Ramon Connell");
let cliente003 = new Conta_cliente(9582019689, "Conta Poupança", 27363, "Jarret Lafuente");
let cliente004 = new Conta_cliente(1761924656, "Conta Poupança", 32415, "Ansel Ardley");
let cliente005 = new Conta_cliente(7401971607, "Conta Poupança", 18789, "Jacki Shurmer");
let cliente006 = new Conta_cliente(630841470, "Conta Corrente", 28776, "Jobi Mawtus");
let cliente007 = new Conta_cliente(4223508636, "Conta Corrente", 2177, "Thomasin Latour");
let cliente008 = new Conta_cliente(185979521, "Conta Poupança", 25994, "Lonnie Verheijden");
let cliente009 = new Conta_cliente(3151956165, "Conta Corrente", 7601, "Alonso Wannan");
let cliente010 = new Conta_cliente(2138105881, "Conta Poupança", 33196, "Bendite Huggett");

//4. A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos)

let ListaClientes = [cliente001, cliente002, cliente003, cliente004, cliente005, cliente006, cliente007, cliente008, cliente009, cliente010]
console.log("Lista de Clientes: ");
console.log(ListaClientes);

//Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes,
// ele será composto pela lista de objetos gerados no ponto anterior.

//o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular)
//por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde
// a esse nome inserido.

console.log();
console.log("----------------------------------------------------------------------------");
console.log();

//o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular)
// por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.

let banco = {
	clientes: ListaClientes,
	consultarCliente: function (titular) {
		for (i in this.clientes) {
			if (this.clientes[i].titular_da_conta == titular) {
				return this.clientes[i]
			}
		}
		return `Cliente ${titular} não encontrado`;
	},

	// Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade de dinheiro para depositar.
	// O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para
	// depositar o saldo da conta, então você deve dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx" .

	deposito: function (titular, valor) {
		for (i in this.clientes) {
			if (this.clientes[i].titular_da_conta == titular) {
				let saldo_anterior = this.clientes[i].saldo;
				this.clientes[i].saldo += valor;
				return `Olá ${titular}, depósito no valor de R$ ${valor} realizado, seu saldo anterior era R$ ${saldo_anterior} e seu novo saldo agora é R$ ${this.clientes[i].saldo}`
			}
		}
		return `Cliente ${titular} não encontrado`;
	},

	
	//Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor a ser extraído.
	//O método deve obter a conta correspondente e subtrair o valor do saldo atual. Caso o resultado seja inferior a 0,
	// você deve imprimir uma mensagem através do console de "Fundos insuficientes",caso contrário você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx"

	saque: function(titular, valor){
		for(i in this.clientes){
			if(this.clientes[i].titular_da_conta == titular){
				if((this.clientes[i].saldo - valor) < 0){
					return `Olá &{titular}, seu saldo é insuficiente para esse saque - Saldo: ${this.clientes[i].saldo}`
				} else {
					saldo_anterior = this.clientes[i].saldo; 
					this.clientes[i].saldo -= valor;
					return `Olá ${titular}, saque de R$ ${valor}, realizado, seu saldo era R$ ${saldo_anterior} e seu novo saldo agora é ${this.clientes[i].saldo}`;
				}
			}
		}
	}
}

console.log("Consulta cliente: ");
console.log(banco.consultarCliente("Abigael Natte"));

console.log();
console.log("Depósito: ");
console.log(banco.deposito("Abigael Natte", 200));

console.log();
console.log("Saque: ");
console.log(banco.saque("Abigael Natte", 600));


