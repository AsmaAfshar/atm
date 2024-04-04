#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 9988;
console.log("Welcome");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "deposit", "fast cash"],
        },
    ]);
    if (operationAns.operation === "fast cash") {
        console.log(operationAns);
        let amountFastCash = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select the amount you want to withdraw:",
                choices: [500, 1000, 5000, 10000],
            },
        ]);
        console.log(`Your Remaining Balance is ${myBalance - amountFastCash.fastcash}Rs.`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
    else if (operationAns.operation === "deposit") {
        let amountDeposit = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "Select the amount you want to deposit:",
            },
        ]);
        console.log(`You deposited ${amountDeposit.deposit} amount of Rs.`);
        console.log(`Your total balance is ${myBalance + amountDeposit.deposit}`);
    }
    else if (operationAns.operation === "withdraw") {
        let amountWithdraw = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter the amount you want to withdraw",
            },
        ]);
        if (amountWithdraw.withdraw <= myBalance) {
            console.log(`You withdraw ${amountWithdraw.withdraw} Rs.`);
            console.log(`Your Remaining Balancde is ${myBalance - amountWithdraw.withdraw} Rs.`);
        }
        else {
            console.log(`You Don't Have Enough Balance.`);
        }
    }
    else {
        console.log("Incorrecr pin number");
    }
}
