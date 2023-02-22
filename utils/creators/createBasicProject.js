import fs from 'fs';
import chalk from 'chalk';

import { PROJECT_NAME } from '../../index.js';

function createBasicProject() {
    const cssContent = "*{margin: 0; padding: 0; box-sizing: border-box;font-family: 'Arial', sans-serif}\n"
    const jsContent = "console.log('Hello World');"
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="./assets/css/style.css">

    <title>${PROJECT_NAME}</title>
</head>
<body>
    <script src="./assets/js/script.js"></script>
</body>
</html>
    `;

    fs.writeFileSync(`${PROJECT_NAME}/index.html`, htmlContent);

    fs.mkdirSync(`${PROJECT_NAME}/assets`);
    fs.mkdirSync(`${PROJECT_NAME}/assets/css`);
    fs.writeFileSync(`${PROJECT_NAME}/assets/css/style.scss`, cssContent);
    fs.mkdirSync(`${PROJECT_NAME}/assets/js`);
    fs.writeFileSync(`${PROJECT_NAME}/assets/js/script.js`, jsContent);

    fs.mkdirSync(`${PROJECT_NAME}/media`);
    fs.mkdirSync(`${PROJECT_NAME}/media/img`);
    fs.mkdirSync(`${PROJECT_NAME}/media/video`);
    fs.mkdirSync(`${PROJECT_NAME}/media/icon`);
    fs.mkdirSync(`${PROJECT_NAME}/media/font`);

    console.log(`
    ${PROJECT_NAME} ${chalk.white.dim('got created')}
    _________________________________________________________________________________\n
    run live server ${chalk.white.dim('to see the project')}
    `);
};

export default createBasicProject;