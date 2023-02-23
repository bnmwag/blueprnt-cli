import inquirer from 'inquirer';

async function askForProjectType() {
    const answer = await inquirer.prompt([{
        name: 'project_type',
        type: 'list',
        message: 'Choose your Project Type:',
        choices: ['vite', 'next13', 'react', 'basic'],
        required: true,
        default () {
            return "vite";
        },
    }, ]);
    return answer.project_type;
}

export default askForProjectType;