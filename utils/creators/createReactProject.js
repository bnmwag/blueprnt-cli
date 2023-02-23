import { PROJECT_NAME } from '../../index.js';
import { spawn } from 'child_process';
import askForDirEntry from '../askForDirEntry.js';
import chalk from 'chalk';

async function createReactProject() {

    const ex = spawn('npx', ['create-react-app@latest', PROJECT_NAME, '-y'], {
        stdio: 'inherit'
    }).on('error', (error) => {
        console.error(`error: ${error.message}`);
    }).on('close', () => {
        console.log(`
        
    ${chalk.dim("Now it's your turn to create")}
        `);
        askForDirEntry();
    });
}

export default createReactProject;