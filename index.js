#!/usr/bin/env node

import chalk from 'chalk';
import askForProjectType from './utils/askForProjectType.js';
import askForDocName from './utils/askForDocName.js';
import createDirTree from './utils/createDirTree.js';
import askForDirEntry from './utils/askForDirEntry.js';
import deleteLines from './utils/deleteLines.js';

export var PROJECT_TYPE = "";
export var PROJECT_NAME = "";
const PRM_COLOR = chalk.hex('#13A7CD')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("\u001b[2J\u001b[0;0H");
    console.log("\n");
    console.log(PRM_COLOR("Create Project\n"));

    PROJECT_TYPE = await askForProjectType()
    PROJECT_NAME = await askForDocName()
    deleteLines(2);
    console.log(`
    ${PROJECT_NAME} ${chalk.dim("gets created")}:
    _________________________________________________________________________________\n
    `);
    await sleep(1000);

    await createDirTree();
    console.log(`
    ${chalk.dim("Now it's your turn to create")}

    `);

    if (PROJECT_TYPE != "next13") {
        await askForDirEntry();
    }
}
await main();