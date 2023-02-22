#!/usr/bin/env node

import chalk from 'chalk';

import askForProjectType from './utils/askForProjectType.js';
import askForDocName from './utils/askForDocName.js';
import createDirTree from './utils/createDirTree.js';
import askForDirEntry from './utils/askForDirEntry.js';

export let PROJECT_TYPE = "";
export let PROJECT_NAME = "";
const prm_color = chalk.hex('#13A7CD')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
    console.log("\u001b[2J\u001b[0;0H");
    console.log("\n");
    console.log(prm_color("Create Project\n"));

    PROJECT_TYPE = await askForProjectType()
    PROJECT_NAME = await askForDocName()
    await createDirTree();

    if (PROJECT_TYPE != "next13") {
        //     console.log("ahh");
        await askForDirEntry();
    }
}
await main();