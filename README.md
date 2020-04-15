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
