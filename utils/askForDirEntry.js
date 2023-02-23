import confirm from '@inquirer/confirm';
import { exec } from 'child_process';
import deleteLines from './deleteLines.js';
import { PROJECT_NAME } from '../index.js';

async function askForDirEntry() {
    const answer = await confirm({
        message: 'Start right away?',
        default: true
    });
    deleteLines(1);
    if (!answer) process.exit(1);


    exec(`cd ${PROJECT_NAME} && code .`, (err, stdout) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    });
}

export default askForDirEntry;