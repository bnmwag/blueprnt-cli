#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import { exec } from 'child_process';

import createViteProject from './helpers/createViteProject.js';
import createNext13Project from './helpers/createNext13Project.js';
import createBasicProject from './helpers/createBasicProject.js';


export let PROJECT_NAME = 'Document';
let PROJECT_TYPE = 'vite';
const prm_color = chalk.hex('#202020');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {

    console.log("\u001b[2J\u001b[0;0H");
    console.log("\n");
    console.log(prm_color("create dir tree\n"));
    await sleep(250);

    await askForProjectType();
    await askForDocName();
    PROJECT_NAME = PROJECT_NAME.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
    await askForCorrectInput();
    await createDirTree();

    if (PROJECT_TYPE != "next13") {
        await askForDirEntry();
    }
}
await main();


async function askForProjectType() {
    const answer = await inquirer.prompt([{
        name: 'project_type',
        type: 'list',
        message: 'Choose your Project Type:',
        choices: ['vite', 'next13', 'basic'],
        default () {
            return "vite";
        },
    }, ]);
    PROJECT_TYPE = answer.project_type;
}

async function askForDocName(alredyCheckedExisting = false) {
    let answerMassage = `${alredyCheckedExisting ? `${PROJECT_NAME} alredy exists. Try another name` : "Choose your Document Name"}:`;
    const answer = await inquirer.prompt([{
        name: 'doc_name',
        type: 'input',
        message: answerMassage,
        default() {
            return "my-project";
        },
    },]);
    PROJECT_NAME = answer.doc_name;

    if (fs.existsSync(PROJECT_NAME)) {
        if (!alredyCheckedExisting) {
            alredyCheckedExisting = true;
        }
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(1);
        await askForDocName(true)
    }
}

async function askForCorrectInput() {
    const answer = await inquirer.prompt([{
        name: 'valid_input',
        type: 'input',
        message: 'Are your settings correct? (y/n)',
        default() {
            return "y";
        },
    },]);
    if (!answer.valid_input == "y") process.exit(1);
}

async function createDirTree() {
    if (PROJECT_TYPE == "vite") {
        createBase()
        createViteProject()
    } else if (PROJECT_TYPE == "next13") {
        createNext13Project()
    } else if (PROJECT_TYPE == "basic") {
        createBase()
        createBasicProject()
    }

    function createBase() {
        fs.mkdirSync(PROJECT_NAME);
        fs.mkdirSync(`${PROJECT_NAME}/.vscode`);
        fs.writeFileSync(`${PROJECT_NAME}/.vscode/settings.json`, '{"liveSassCompile.settings.showOutputWindowOn": "Error"}');
    }
}

async function askForDirEntry() {
    const answer = await inquirer.prompt([{
        name: 'goto_dir',
        type: 'input',
        message: 'You want to enter the project (y/n)',
        default() {
            return "y";
        },
    },]);
    if (answer.goto_dir != "y") process.exit(1);

    exec(`cd ${PROJECT_NAME} && code .`, (err, stdout) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    });
}