import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import deleteLines from './deleteLines.js';

let PROJECT_NAME = "";
async function askForDocName(alredyCheckedExisting = false) {
    let answerMassage = `${alredyCheckedExisting ? `${chalk.reset(chalk.cyan.underline(PROJECT_NAME))} ${chalk.bold('already exists. Try another name')}` : "Choose your Document Name"}:`;
    const answer = await inquirer.prompt([{
        name: 'doc_name',
        type: 'input',
        message: answerMassage,
        required: true,
        default() {
            return "my-project";
        },
    },]);

    PROJECT_NAME = answer.doc_name;
    PROJECT_NAME = PROJECT_NAME.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
    
    if (fs.existsSync(PROJECT_NAME)) {
        deleteLines();
        await askForDocName(true);
    }  

    return PROJECT_NAME;
}

export default askForDocName;