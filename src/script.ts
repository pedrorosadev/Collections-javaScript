import { removeData } from "./removeData";
import { showData } from "./showData";
import { showMenu } from "./showMenu";
import { storeData } from "./storeData";

const prompt = require('prompt-sync')();

let option:number;
let stock: string[] = [];

//Menu de Opções
try {
    do {
        showMenu();
        option = Number(prompt('>> '));

        switch (option) {
            case 1: //Mostrará os Dados Armazenados no Sistema
                console.clear();
                showData(stock);
                break;
            case 2: //Adiciona itens no Sistema
                console.clear();
                const adition = prompt('Adicionar Item: ');
                storeData(adition, stock);
                break;
            case 3: //Opção para atualizar os dados, como remover e adicionar
                console.clear();
                showData(stock);
                const optionUpdate = prompt('[1] Adicionar Item\n[2] Remover Item');
                if (optionUpdate == 1) {
                    const addItem = prompt('>> ');
                    storeData(addItem, stock);
                } else if (optionUpdate == 2) {
                    const removeItem = prompt('>> ');
                    removeData(removeItem, stock);
                }
                console.log('=========== Atualização da Lista ===========\n');
                showData(stock);
                break;
            case 4:
                console.clear();
                showData(stock);
                const removeItem = prompt('>> ');
                removeData(removeItem, stock);
                break;
            case 5:
                console.log('\nSaindo...');
                break;

        }
    } while (option != 5);
} catch (error) {
    console.log(`${error}`)
}