#!/usr/bin/env node

import chalk from 'chalk';
import askForProjectType from './utils/askForProjectType.js';
import askForDocName from './utils/askForDocName.js';
import createDirTree from './utils/createDirTree.js';
import askForDirEntry from './utils/askForDirEntry.js';

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
    console.log(`

    Creating ${PROJECT_NAME} - a ${PROJECT_TYPE} project:
    _________________________________________________________________________________\n
    `);
    await sleep(1000);

    await createDirTree();

    if (PROJECT_TYPE != "next13") {
        await askForDirEntry();
    }
}
await main();