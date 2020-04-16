# Estudo

Note que utilizando a nomenclatura _get_ em classes, as funcoes criadas passam a ser
consideradas propriedades da classe, dessa forma acessando via qualquerObj.metodo em vez de
qualquerObj.metodo().

---

# Congelamento de Objetos

Atraves da propriedade Object.freeze(Object), permite que congelemos o objeto assim impossibilitando
qualquer alteracao no valor da variavel, podemos incorporar esta solucao no constructor da classe, utilizando o this.

cuidado que e raso, congela propriedades do objeto, e nao propriedades de objetos internos. Nesses casos usar
programacao defensiva.

---

# Programacao defensiva

Quando nao conseguimos blindar os valores da classe com metodos como freeze podemos adotar a postura de gerar o retorno
de novos objetos para o usuario, desta forma mantendo o valor interno da classe protegido, visto que esta e uma forma eficiente de manter
o valor imutavel quanto a outras propostas de emular private.

# escopo de bloco

utilizar nomenclatura let em vez de var, para garantir que a variavel tenha escolpo de bloco, nao existindo assim fora do
bloco onde e declarada.

# Bind

Quando associarmos uma funcao a uma variavel, perdemos assim o contexto daquela funcao, porem utilizando do metodo .bind(Obj),
e possivel manter esta associacao da funcao com ocontexto do objeto, permitindo enxugar no codigo os metodos repetitivos,
criando uma especie de micro-framework

# Spread operator ...

Utilizamos o Spread operator ... para desmembrar os valores de um array, ou objeto, passando assim os valores como parametro .

# arrow Function

Substituimos a nomenclatura de funcao de : function(){} para algo do tipo () => {} , deixando assim o codigo menos verbosso.

# Metodos Estaticos

No ES6 possuimos a nomenclatura static para funcoes, permitindo que invoquemos a funcao sem a necessidade de instanciar o objeto a qual a funcao pertence,
isto faz sentido apartir do momento que nao existe dependencia do metodo com os valores do objeto.

# String template

Podemos usar este modo de concatenacao de string para deixar mais legivel o codigo.

# Heranca

Utilizamos para deixar o codigo mais enxuto apartir do momento que metodos comuns podem ser isolados, quando referindo-se a um elemento pertencente
ao pai, devemos referir o elemento como super(elemento).

# cuidado

this e dinamico, depende do contexto
Arrow function amarra o escopo, desta forma o this fica fixo na criacao da funcao.
