function Cliente(nome, telefoneCelular, email, endereco) {
    let _nome = nome;
    let _telefoneCelular = telefoneCelular;
    let _email = email;
    let _endereco = endereco;

    Object.defineProperty(this, 'nome', {
        get: function() { return _nome; },
        set: function(value) { _nome = value; }
    });

    Object.defineProperty(this, 'telefoneCelular', {
        get: function() { return _telefoneCelular; },
        set: function(value) { _telefoneCelular = value; }
    });

    Object.defineProperty(this, 'email', {
        get: function() { return _email; },
        set: function(value) { _email = value; }
    });

    Object.defineProperty(this, 'endereco', {
        get: function() { return _endereco; },
        set: function(value) { _endereco = value; }
    });

    this.descricao = function() {
        return '---------------' + '\n' + 'Informações do Cliente:' + '\n'+ '---------------' + '\n' +
        this.nome + '\n' +'---------------'+ '\n' +'---------------'+ '\n' + 'Telefone:' + '\n' + 'DDD: ' +
        this.telefoneCelular.ddd + '\n' + 'Número: ' + this.telefoneCelular.numero + '\n' + 'Endereço de email: ' +
        '\n' + 'email: ' + this.email + '\n' + '---------------'+ '\n' + 'Endereço: ' + '\n' + 'Rua: ' +
        this.endereco.Rua + '\n' + 'Número: ' + this.endereco.NumeroE + '\n' + 'Cidade: ' + this.endereco.Cidade +
        '\n' + 'Estado: ' + this.endereco.UF + '\n' +'---------------'
    };
}

function Telefonecelular(ddd, numero) {
    let _ddd = ddd;
    let _numero = numero;

    Object.defineProperty(this, 'ddd', {
        get: function() { return _ddd; },
        set: function(value) { _ddd = value; }
    });

    Object.defineProperty(this, 'numero', {
        get: function() { return _numero; },
        set: function(value) { _numero = value; }
    });
}

function Endereco(UF, Cidade, Rua, NumeroE) {
    let _UF = UF;
    let _Cidade = Cidade;
    let _Rua = Rua;
    let _NumeroE = NumeroE;

    Object.defineProperty(this, 'UF', {
        get: function() { return _UF; },
        set: function(value) { _UF = value; }
    });

    Object.defineProperty(this, 'Cidade', {
        get: function() { return _Cidade; },
        set: function(value) { _Cidade = value; }
    });

    Object.defineProperty(this, 'Rua', {
        get: function() { return _Rua; },
        set: function(value) { _Rua = value; }
    });

    Object.defineProperty(this, 'NumeroE', {
        get: function() { return _NumeroE; },
        set: function(value) { _NumeroE = value; }
    });
}

// O restante do código permanece igual
let telefone1 = new Telefonecelular('11', '9999999');
let endereco1 = new Endereco('SP', 'Sao Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos', telefone1, 'carlos.conrado@app.com', endereco1);

let telefone2 = new Telefonecelular('111', '990009999');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Av. Paulista', '987');
let cliente2 = new Cliente('Ana', telefone2, 'ana.conrado@app.com', endereco2);

let telefone3 = new Telefonecelular('111', '990009999');
let endereco3 = new Endereco('RJ', 'Rio de Janeiro', 'Av. Paulista', '987');
let cliente3 = new Cliente('Yara', telefone3, 'ana.conrado@app.com', endereco3);

let telefone4 = new Telefonecelular('111', '990009999');
let endereco4 = new Endereco('RJ', 'Rio de Janeiro', 'Av. Paulista', '987');
let cliente4 = new Cliente('Breno', telefone4, 'ana.conrado@app.com', endereco4);

let clientes = [cliente4, cliente1, cliente3, cliente2];
clientes.sort((a, b) => a.nome.localeCompare(b.nome));

for (let index = 0; index < clientes.length; index++) {
    console.log(clientes[index].descricao());
}