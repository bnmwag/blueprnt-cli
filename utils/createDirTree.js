import fs from 'fs';

import { PROJECT_NAME, PROJECT_TYPE } from "../index.js";

import createViteProject from './creators/createViteProject.js';
import createNext13Project from './creators/createNext13Project.js';
import createReactProject from './creators/createReactProject.js';
import createBasicProject from './creators/createBasicProject.js';

function createBase() {
    fs.mkdirSync(PROJECT_NAME);
    fs.mkdirSync(`${PROJECT_NAME}/.vscode`);
    fs.writeFileSync(`${PROJECT_NAME}/.vscode/settings.json`, '{"liveSassCompile.settings.showOutputWindowOn": "Error"}');
}

async function createDirTree() {
    if (PROJECT_TYPE != "next13" && PROJECT_TYPE != "react") createBase();

    switch (PROJECT_TYPE) {
        case "vite":
            await createViteProject();
            break;
        case "next13":
            await createNext13Project();
            break;
        case "react":
            await createReactProject();
            break;
        case "basic":
            await createBasicProject();
            break;
        default:
            console.log(`Error: Invalid PROJECT_TYPE - ${PROJECT_TYPE}`);
            break;
    }
}

export default createDirTree;