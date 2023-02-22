import { PROJECT_NAME } from '../../index.js';
import { spawn } from 'child_process';
import askForDirEntry from '../askForDirEntry.js';

async function createNext13Project() {

    const ex = spawn('npx', ['create-next-app@latest', '--experimental-app', PROJECT_NAME, '-y'], {
        stdio: 'inherit'
    }).on('error', (error) => {
        console.error(`error: ${error.message}`);
    }).on('close', () => {
        askForDirEntry();
    });
}

export default createNext13Project;