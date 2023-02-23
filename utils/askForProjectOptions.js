import inquirer from 'inquirer';
import confirm from '@inquirer/confirm';
import { PROJECT_TYPE } from '../index.js';


async function askForProjectOptions() {
    if (PROJECT_TYPE == "vite") {
        let options = [{
                name: 'gsap',
                v: '3.11.4',
            },
            {
                name: 'three',
                v: '0.150.0',
            },
            {
                name: 'jquery',
                v: '3.6.3',
            }
        ];

        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            const answer = await confirm({
                message: 'Add ' + option.name + '?',
                default: true
            });
            if (!answer) options.splice(i--, 1);
        }
        return options;
    }
}

export default askForProjectOptions;