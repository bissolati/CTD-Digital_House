//Programador a Bordo
//https://www.youtube.com/watch?v=vB-aPrlSEXs&list=RDCMUC5fWvbBnaFAi2hJlHRmg5kw&index=3

var usuario = {
    nome: 'Marcelo',
    idade: 26,
    youtube: 'Programador a Bordo',
    competencias : {
        linguagens: ['JavaScript', 'Python', 'Go', 'Scala', 'PHP'],
        instrumentosMusicais: ['Guitarra', 'Baixo', 'Bateria']
    }
};

console.log(usuario);
console.log(usuario.idade);
console.log(usuario.nome);
console.log(usuario.youtube);

//é possível imprimir também usando colchetes
console.log(usuario['youtube']);

usuario.ano = 2019;

console.log(usuario);
console.log(usuario.ano);

delete usuario.idade;
console.log(usuario);

usuario.hobbies = ['Musica', 'Programar', 'Viajar'];
console.log(usuario);

console.log(usuario);

var usuario2 = {
    digaOi2(name) {  //Forma mais curto de escrever uma função dentro de um objeto
        return `Olá ${name}`;
    },

    digaOi: function(name) {
        return `Olá ${name}`;
    }
};

console.log(usuario2.digaOi('Marcelo'));
console.log(usuario2.digaOi2('Bissolati'));

var cor1 = 'azul';
var cor2 = 'Amarelo';

var usuario3 = {
    nome: 'Marcelo',
    cor1: cor1,
    cor2 //se a propriedade do objeto tiver o mesmo nome da variável esta é a forma mais curta de fazer
}
console.log(usuario3);

//juntar 2 ou mais objetos

var usuario4 = {
    nome: 'Marcelo',
    idade: 41
};
var extraInfo = {
    pais: 'Brasil',
    estado: 'Mato Grosso'
};
var novoUsuario = Object.assign({}, usuario4, extraInfo); //{} chaves vazias cria um novo objeito
console.log(novoUsuario);

console.log('Forma mais curta de juntar: ');
var novoUsuario2 = {
    ...usuario4,
    ...extraInfo,
    sexo: "M",
    profissao: 'Programador'
}
console.log(novoUsuario2);


//juntar informações de um objeto no outro

var nomes = {
    nome: 'Marcelo'
}
var sobrenomes = {
    sobrenome: 'Bissolati'
} 
Object.assign(nomes, sobrenomes);
console.log(nomes);

console.log();
console.log('Passando variavel como chave/propriedade no objeto');

var nomeVariavel = 'Estado';

var usuario5 = {
    nome: 'Marcelo',
    [nomeVariavel]: 'Rio de Janeiro' //colocar o nome da variável entre colchetes.
}
console.log(usuario5);

console.log();
console.log('getter e setter');

var usuarios = [ //cada posição do array vai ser um objeto
    {
        nome: 'Marcelo',
        idade: 41
    },
    {
        nome: 'João',
        idade: 19
    },
    {
        nome: 'Maria',
        idade: 55
    },
];
console.log(usuarios[1].nome); //acessando posição 1 do array e bunscand a propriedade nome do objeto

console.log(usuarios);

console.log('Navergar no array de usuarios');

var usuario = {
    posicao: 0,
    get atual(){
        return usuarios[this.posicao];
    },
    set atual(posicao_parametro){
        this.posicao = posicao_parametro; //O parametro vai ser recebido na hora de invocar a função.
    },
    proximo(){
        ++this.posicao;
    },
    anterior(){
        --this.posicao;
    },
}
console.log('Usuario atual na posição inicial que foi definidad como zero');
console.log(usuario.atual);

console.log('Proximo usuario');
usuario.proximo();
console.log(usuario.atual);

console.log('Proximo usuario');
usuario.proximo();
console.log(usuario.atual);

console.log('Usuario anterior');
usuario.anterior();
console.log(usuario.atual);

console.log('Usuario definico na posição 0 ');
usuario.atual = 0;
console.log(usuario.atual);

console.log('Usuario definico na posição 1 ');
usuario.atual = 1;
console.log(usuario.atual);

console.log('Usuario definico na posição 2 ');
usuario.atual = 2;
console.log(usuario.atual);


