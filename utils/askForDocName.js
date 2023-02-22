import inquirer from 'inquirer';
import fs from 'fs';

import deleteLines from './deleteLines.js';

let PROJECT_NAME = "my-project";
async function askForDocName(alredyCheckedExisting = false) {
    let answerMassage = `${alredyCheckedExisting ? `${PROJECT_NAME} alredy exists. Try another name` : "Choose your Document Name"}:`;
    const answer = await inquirer.prompt([{
        name: 'doc_name',
        type: 'input',
        message: answerMassage,
        required: true,
        default() {
            return "my-project";
        },
    },]);

    answer.doc_name = answer.doc_name.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
    PROJECT_NAME = answer.doc_name;
    
    if (fs.existsSync(PROJECT_NAME)) {
        if (!alredyCheckedExisting) {
            alredyCheckedExisting = true;
        }
        deleteLines()
        await askForDocName(true)
    }
    return answer.doc_name;
}

export default askForDocName;