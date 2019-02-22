// Função em JS é First-Class Object (Citizens)
// Higher-Order Function

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { } // Cria Função Anônima e Referencia

// Armazenar em um Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um Atributo de Objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função com Parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)

