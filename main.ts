#! /usr/bin/env/ node

import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bold.blue("\n \t Welcome to 'CodeWithWaleed' - Currency Convertor\n"));

// define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1, 
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUR": 1.65,
    "PKR": 280,
    // add more currencies and their exchange rates here
}

// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUR", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// display the converted amount

console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);