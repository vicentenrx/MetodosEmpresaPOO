"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem_1 = require("./Personagem");
var faker_1 = require("@faker-js/faker");
var prompt = require('prompt-sync')();
var person = new Personagem_1.Personagem();
person.nome = "Edécio";
person.nivel = 1;
person.armadura = 80;
person.ataque = 50;
person.classe = "Padre";
person.defesa = 50;
person.intelecto = 100;
person.mana = 80;
person.raca = "Morto-vivo";
person.stamina = 100;
person.vida = 100;
person.xp = 0;
/* let person2 = {...person};


person2.nome = "Gladimir";

console.log(person2.nome) // Gladimir
console.log(person2.stamina) // 99
console.log(person.nome) // Edécio
console.log(person.stamina) // 99 */
//Missão 1
function treinarAtaque(person, numeroHoras) {
    var numeroGerado = randomizar(15, 30);
    console.log("N\u00FAmero gerado: ".concat(numeroGerado));
    person.ataque = 10 + Math.round((person.ataque * 1.1) * numeroHoras);
    person.stamina -= numeroGerado * numeroHoras;
    var morreu = person.stamina < 0;
    if (morreu) {
        throw new Error("".concat(person.nome, " subiu!"));
    }
}
function randomizar(base, limite) {
    return Math.floor(Math.random() * (limite - base + 1)) + base;
}
//Missão 2
function treinarDefesa(person, numeroHoras) {
    var numeroGerado = randomizar(15, 30);
    console.log("N\u00FAmero gerado: ".concat(numeroGerado));
    person.defesa = 10 + Math.round((person.defesa * 1.1) * numeroHoras);
    person.stamina -= numeroGerado * numeroHoras;
    var morreu = person.stamina < 0;
    if (morreu) {
        throw new Error("".concat(person.nome, " subiu!"));
    }
}
//Missão 3
function descansar(person, numeroHoras) {
    var numeroGerado = randomizar(10, 20);
    console.log("N\u00FAmero gerado: ".concat(numeroGerado));
    person.stamina += numeroGerado * numeroHoras;
    if (person.stamina > 100) {
        var excesso = person.stamina - 100;
        person.stamina = 100;
        person.ataque -= Math.floor(person.ataque * (excesso / 100));
        person.defesa -= Math.floor(person.defesa * (excesso / 100));
        console.log("excesso de energia: ".concat(excesso));
    }
}
//Missão 4
function desafiar(person, nivelOponente) {
    var oponente = {
        nome: faker_1.faker.person.fullName(),
        vida: randomizar(100, 150) * nivelOponente,
        defesa: randomizar(110, 150) * nivelOponente,
        ataque: randomizar(120, 200) * nivelOponente
    };
    console.log("------I========================>");
    console.table("Oponente: ".concat(oponente.nome));
    console.log("------I========================>");
    console.table("Vida: ".concat(oponente.vida));
    console.table("Ataque: ".concat(oponente.ataque));
    console.table("Defesa: ".concat(oponente.defesa));
    if (person.ataque <= oponente.defesa && oponente.ataque <= person.defesa) {
        console.log("------I========================>");
        console.log("Os dois viram que não daria em nada e foram treinar mais!");
        console.log("==============(-!-)==============");
        return;
    }
    while (person.vida > 0 && oponente.vida > 0) {
        var dado = Math.random();
        if (dado < 0.5) {
            console.log("======================================");
            console.log("".concat(person.nome, " ATACOU -l===> ").concat(oponente.nome));
            console.log("======================================");
            var dano = Math.max(0, person.ataque - oponente.defesa);
            oponente.vida -= dano;
            console.table("Vida do ".concat(oponente.nome, ": ").concat(oponente.vida));
        }
        else {
            var dano = Math.max(0, oponente.ataque - person.defesa);
            person.vida -= dano;
            console.log("======================================");
            console.log("".concat(oponente.nome, " ATACOU -l===> ").concat(person.nome));
            console.log("======================================");
            console.table("Vida de ".concat(person.nome, ": ").concat(person.vida));
        }
    }
    if (person.vida <= 0) {
        person.vida = 1;
        person.nivel = Math.max(0, person.nivel - Math.floor(person.nivel * 0.1));
        console.log("".concat(person.nome, " foi derrotado, e por isso perdeu 10% de XP! (Vida ajustada para 1)"));
    }
    else {
        person.nivel += 2 * nivelOponente;
        var aumentoVida = 25 * randomizar(2, 10);
        person.vida += aumentoVida;
        console.log("".concat(person.nome, " derrotou o oponente e ganhou ").concat(2 * nivelOponente, " Niveis, e ").concat(aumentoVida, " de vida!"));
    }
}
function exibirStatus(person) {
    console.table(person);
}
function main() {
    console.log("==============================");
    console.log("Bem vindo ao jogo de RPG!");
    while (true) {
        console.log("\n------I========================>");
        console.log("            MENU");
        console.log("------I========================>");
        console.log("O que você gostaria de fazer?");
        console.log("==============================");
        console.log("1. Treinar Ataque");
        console.log("2. Treinar Defesa");
        console.log("3. Descansar");
        console.log("4. Desafiar");
        console.log("5. Exibir Status");
        console.log("6. Sair");
        console.log("==============================");
        var acao = prompt("Escolha uma opção: ");
        if (acao === '6') {
            console.log("======================");
            console.log("Saindo do jogo...");
            console.log("======================");
            break;
        }
        if (acao === '5') {
            console.log("======================");
            exibirStatus(person);
            console.log("======================");
            continue;
        }
        try {
            if (acao === '1') {
                var horas = parseInt(prompt("Quantas horas? "), 10);
                while (isNaN(horas) || horas <= 0) {
                    console.log("Por favor, insira um número válido de horas.");
                    horas = parseInt(prompt("Quantas horas? "), 10);
                }
                console.log("----l================>");
                treinarAtaque(person, horas);
            }
            else if (acao === '2') {
                var horas = parseInt(prompt("Quantas horas? "), 10);
                while (isNaN(horas) || horas <= 0) {
                    console.log("Por favor, insira um número válido de horas.");
                    horas = parseInt(prompt("Quantas horas? "), 10);
                }
                console.log("=========(-!-)=========");
                treinarDefesa(person, horas);
            }
            else if (acao === '3') {
                var horas = parseInt(prompt("Quantas horas? "), 10);
                while (isNaN(horas) || horas <= 0) {
                    console.log("Por favor, insira um número válido de horas.");
                    horas = parseInt(prompt("Quantas horas? "), 10);
                }
                console.log("======================");
                descansar(person, horas);
            }
            else if (acao === '4') {
                console.log("======================");
                var nivel = parseInt(prompt("Qual o nível do Oponente? "), 10);
                desafiar(person, nivel);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error("Ocorreu um ero desconhecido.");
            }
        }
    }
}
main();
