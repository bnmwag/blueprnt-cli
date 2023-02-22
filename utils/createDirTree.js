import fs from 'fs';

import { PROJECT_NAME, PROJECT_TYPE } from "../index.js";

import createViteProject from './creators/createViteProject.js';
import createNext13Project from './creators/createNext13Project.js';
import createBasicProject from './creators/createBasicProject.js';

async function createDirTree() {
    if (PROJECT_TYPE != "next13") createBase()

    if (PROJECT_TYPE == "vite") {
        createViteProject()
    } else if (PROJECT_TYPE == "next13") {
        createNext13Project()
    } else if (PROJECT_TYPE == "basic") {
        createBasicProject()
    } else {
        console.log("Error: PROJECT_TYPE is not defined: " + PROJECT_TYPE);
    }

    function createBase() {
        fs.mkdirSync(PROJECT_NAME);
        fs.mkdirSync(`${PROJECT_NAME}/.vscode`);
        fs.writeFileSync(`${PROJECT_NAME}/.vscode/settings.json`, '{"liveSassCompile.settings.showOutputWindowOn": "Error"}');
    }
}

export default createDirTree;