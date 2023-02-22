import { PROJECT_NAME } from '../../index.js';
import clipboardy from 'clipboardy';

async function createNext13Project() {
    console.log("\u001b[2J\u001b[0;0H");
    console.log(`
    run:
    'npx create-next-app@latest --experimental-app ${PROJECT_NAME}'

    command got copied to clipboard
    `);

    await clipboardy.write(`npx create-next-app@latest --experimental-app ${PROJECT_NAME}`);
}

export default createNext13Project;