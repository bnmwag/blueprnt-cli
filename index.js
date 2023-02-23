#!/usr/bin/env node

import chalk from 'chalk';
import askForProjectType from './utils/askForProjectType.js';
import askForDocName from './utils/askForDocName.js';
import createDirTree from './utils/createDirTree.js';
import askForDirEntry from './utils/askForDirEntry.js';
import askForProjectOptions from './utils/askForProjectOptions.js';
import deleteLines from './utils/deleteLines.js';

export var PROJECT_TYPE = "";
export var PROJECT_NAME = "";
export var PROJECT_OPTIONS = [{}];
const PRM_COLOR = chalk.hex('#13A7CD')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("\u001b[2J\u001b[0;0H");
    console.log("\n");
    console.log(PRM_COLOR("Create Project with blueprnt 🩻\n"));

    PROJECT_TYPE = await askForProjectType();
    deleteLines(1);
    PROJECT_NAME = await askForDocName();
    deleteLines(1);
    PROJECT_OPTIONS = await askForProjectOptions();
    deleteLines(3);

    console.log(`
    ${PROJECT_NAME} ${chalk.white.dim("gets created\n")}
    ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――\n

    `);
    await sleep(1000);
    deleteLines(7);

    await createDirTree();

    if (PROJECT_TYPE != "next13" && PROJECT_TYPE != "react") {
        console.log(`
    ${chalk.dim("Now it's your turn to create")}
        `);
        await askForDirEntry();
    }
}
await main();