"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeData_1 = require("./removeData");
var showData_1 = require("./showData");
var showMenu_1 = require("./showMenu");
var storeData_1 = require("./storeData");
var prompt = require('prompt-sync')();
var option;
var stock = [];
//Menu de Opções
try {
    do {
        (0, showMenu_1.showMenu)();
        option = Number(prompt('>> '));
        switch (option) {
            case 1: //Mostrará os Dados Armazenados no Sistema
                (0, showData_1.showData)(stock);
                break;
            case 2: //Adiciona itens no Sistema
                var adition = prompt('Adicionar Item: ');
                (0, storeData_1.storeData)(adition, stock);
                break;
            case 3: //Opção para atualizar os dados, como remover e adicionar
                (0, showData_1.showData)(stock);
                var optionUpdate = prompt('[1] Adicionar Item\n[2] Remover Item');
                if (optionUpdate == 1) {
                    var addItem = prompt('>> ');
                    (0, storeData_1.storeData)(addItem, stock);
                }
                else if (optionUpdate == 2) {
                    var removeItem_1 = prompt('>> ');
                    (0, removeData_1.removeData)(removeItem_1, stock);
                }
                console.log('=========== Atualização da Lista ===========\n');
                (0, showData_1.showData)(stock);
                break;
            case 4:
                var removeItem = prompt('>> ');
                (0, removeData_1.removeData)(removeItem, stock);
                break;
            case 5:
                console.log('Saindo...');
                break;
        }
    } while (option != 5);
}
catch (error) {
    console.log("".concat(error));
}
