import fs from 'fs';
import chalk from 'chalk';
import clipboardy from 'clipboardy';

import { PROJECT_NAME } from '../../index.js';

async function createViteProject() {
    const cssContent = "*{margin: 0; padding: 0; box-sizing: border-box;font-family: 'Arial', sans-serif}\n"
    const jsContent = "console.log('Hello World');"
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>${PROJECT_NAME}</title>

    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <script type="module" src="./script.js"></script>
</body>
</html>
    `;
    const gitIgnoreContent = `node_modules`
    const packageContent = `
        {
            "name": "${PROJECT_NAME}",
            "private": true,
            "version": "0.0.0",
            "type": "module",
            "scripts": {
                "dev": "vite",
                "build": "vite build",
                "deploy": "vercel --prod"
            },
            "devDependencies": {
                "vite": "^4.0.4"
            },
            "dependencies": {
                "vercel": "^28.13.0"
            }
        }`
    const viteConfigContent = `
    const isCodeSandbox = !!process.env.SANDBOX_URL

    export default {
        root: "src/",
        publicDir: "../static/",
        base: "./",
        server:
        {
            host: true,
            open: !isCodeSandbox // Open if it's not a CodeSandbox
        },
        build:
        {
            outDir: "../dist",
            emptyOutDir: true,
            sourcemap: true
        }
    }`

    fs.mkdirSync(`${PROJECT_NAME}/src`);
    fs.mkdirSync(`${PROJECT_NAME}/src/css`);
    fs.writeFileSync(`${PROJECT_NAME}/src/css/style.scss`, cssContent);
    fs.writeFileSync(`${PROJECT_NAME}/src/index.html`, htmlContent);
    fs.writeFileSync(`${PROJECT_NAME}/src/script.js`, jsContent);

    fs.mkdirSync(`${PROJECT_NAME}/static`);
    fs.mkdirSync(`${PROJECT_NAME}/static/assets`);

    fs.writeFileSync(`${PROJECT_NAME}/.gitignore`, gitIgnoreContent);
    fs.writeFileSync(`${PROJECT_NAME}/package.json`, packageContent);
    fs.writeFileSync(`${PROJECT_NAME}/package-lock.json`, "{}");
    fs.writeFileSync(`${PROJECT_NAME}/vite.config.js`, viteConfigContent);

    // console.log("\u001b[2J\u001b[0;0H");
    console.log(`
    ${PROJECT_NAME} ${chalk.white.dim('got created\n')}
    'npm i' ${chalk.white.dim('to install packages (copied to clipboard)')}
    'npm run dev' ${chalk.white.dim('to start dev server')}
    ${chalk.cyan("happy coding :)")}
    `);
    await clipboardy.write(`npm i`);
}

export default createViteProject;