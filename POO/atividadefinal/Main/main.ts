import { CartaoCredito } from "../ClassesPagamentos/CartaoCredito";
import { Boleto } from "../ClassesPagamentos/Boleto";
import { Pix } from "../ClassesPagamentos/Pix";
import { processarPagamento } from "../ProcessoPagamento/processarPagamento";
import promptSync from 'prompt-sync';
import chalk from 'chalk';



const prompt = promptSync();

const valorCartao = Number(prompt('Digite o valor para pagar com ' + chalk.yellow('Cartão de Crédito: ')));
const valorBoleto = Number(prompt('Digite o valor para pagar com ' + chalk.yellow('Boleto: ')));
const valorPix = Number(prompt('Digite o valor para pagar com ' + chalk.yellow('Pix: ')));

const pagamentoCartao = new CartaoCredito();
const pagamentoBoleto = new Boleto();
const pagamentoPix = new Pix();

processarPagamento(pagamentoCartao, valorCartao);
processarPagamento(pagamentoBoleto, valorBoleto);
processarPagamento(pagamentoPix, valorPix);