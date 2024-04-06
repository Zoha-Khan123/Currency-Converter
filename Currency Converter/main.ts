#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

let currency: any = {
    PKR: 1,  //Base Currency
    USD: 0.003595,
    EUR: 0.003318,
    GBP: 0.002845,
    CAD: 0.004886,
    INR: 0.299466,
    EGP: 0.170351
}
console.log(chalk.bold.greenBright("\n\n💰💰💰💲💲==============WELCOME TO CURRENCY CONVERTER=================💰💰💰💲💲"));


let continueProject = true
while (continueProject = true) {
    let options = await inquirer.prompt([
        {
            type: 'list',
            name: 'option1',
            message: 'Select One Option',
            choices: ['Currency Converter', 'Quit']
        }
    ])
    if (options.option1 === 'Currency Converter') {

        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'from',
                message: 'Enter from currency',
                choices: ['PKR', 'USD', 'EUR', 'GBP', 'CAD', 'INR', 'EGP']
            },
            {
                type: 'list',
                name: 'to',
                message: 'Enter to currency',
                choices: ['PKR', 'USD', 'EUR', 'GBP', 'CAD', 'INR', 'EGP']
            },
            {
                type: 'input',
                name: 'amount',
                message: 'Enter amount',

            }
        ])

        let getEachCurrencyFrom = currency[answer.from];
        let getEachCurrencyTo = currency[answer.to];
        let getAmount = answer.amount;
        let totalAmount = getAmount / getEachCurrencyFrom;
        let convert = (totalAmount * getEachCurrencyTo);
        console.log(Math.floor(convert));
    }
    else {
        break;
    }

}
console.log(chalk.bold.greenBright("\n\n======================🚀=Thanks for using my application 🚀= ======================== "));
