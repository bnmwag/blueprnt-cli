import fs from 'fs';
import chalk from 'chalk';
import clipboardy from 'clipboardy';

import { PROJECT_NAME, PROJECT_OPTIONS } from '../../index.js';

async function createViteProject() {
    const cssContent = "*{margin: 0; padding: 0; box-sizing: border-box;font-family: 'Arial', sans-serif}\n";
    var jsContent = ``;
    // check if options contain three
    const three = PROJECT_OPTIONS.find(option => option.name == "three");
    if (three) {
        jsContent += `
        const _0x3f17b0 = _0x1624;
(function(_0x3d0e93, _0x14b86d) { const _0x5c9f34 = _0x1624,
        _0x46ab90 = _0x3d0e93(); while (!![]) { try { const _0x5c3ab9 = parseInt(_0x5c9f34(0x152)) / 0x1 * (parseInt(_0x5c9f34(0x150)) / 0x2) + parseInt(_0x5c9f34(0x141)) / 0x3 + parseInt(_0x5c9f34(0x159)) / 0x4 * (-parseInt(_0x5c9f34(0x160)) / 0x5) + parseInt(_0x5c9f34(0x149)) / 0x6 * (parseInt(_0x5c9f34(0x144)) / 0x7) + parseInt(_0x5c9f34(0x15d)) / 0x8 * (parseInt(_0x5c9f34(0x154)) / 0x9) + -parseInt(_0x5c9f34(0x151)) / 0xa + -parseInt(_0x5c9f34(0x147)) / 0xb * (parseInt(_0x5c9f34(0x14d)) / 0xc); if (_0x5c3ab9 === _0x14b86d) break;
            else _0x46ab90['push'](_0x46ab90['shift']()); } catch (_0x47e38a) { _0x46ab90['push'](_0x46ab90['shift']()); } } }(_0x14e1, 0x60508));
import * as _0x1c4452 from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const scene = new _0x1c4452['Scene'](),
    camera = new _0x1c4452[(_0x3f17b0(0x14c))](0x4b, window[_0x3f17b0(0x15c)] / window[_0x3f17b0(0x158)], 0.1, 0x3e8),
    canvas = document[_0x3f17b0(0x145)](_0x3f17b0(0x157));

function _0x1624(_0x51aabb, _0xbba54) { const _0x14e107 = _0x14e1(); return _0x1624 = function(_0x162408, _0x4733e2) { _0x162408 = _0x162408 - 0x141; let _0x1696a3 = _0x14e107[_0x162408]; return _0x1696a3; }, _0x1624(_0x51aabb, _0xbba54); }
canvas['id'] = 'bg', document[_0x3f17b0(0x15b)][_0x3f17b0(0x146)](canvas);

function _0x14e1() { const _0x2ffca1 = ['TorusKnotGeometry', 'update', 'PerspectiveCamera', '133716ooCcSF', '#bg', 'setPixelRatio', '4QCKSbb', '7633090bJviWo', '188579OqTABv', 'position', '7029LITqMR', 'WebGLRenderer', 'MeshStandardMaterial', 'canvas', 'innerHeight', '8wzGAOS', 'domElement', 'body', 'innerWidth', '5504BAdQPP', 'rotation', 'setSize', '1845905zNPnQu', 'Mesh', 'querySelector', '2114910rjVJks', '#13A7CD', 'render', '70xYgBVG', 'createElement', 'appendChild', '297OvxSSg', 'set', '346548vQNcey'];
    _0x14e1 = function() { return _0x2ffca1; }; return _0x14e1(); }
const renderer = new _0x1c4452[(_0x3f17b0(0x155))]({ 'canvas': document[_0x3f17b0(0x162)](_0x3f17b0(0x14e)) });
renderer[_0x3f17b0(0x14f)](window['devicePixelRatio']), renderer[_0x3f17b0(0x15f)](window[_0x3f17b0(0x15c)], window[_0x3f17b0(0x158)]), camera[_0x3f17b0(0x153)][_0x3f17b0(0x148)](0xf, 0xf, 0x1e), renderer[_0x3f17b0(0x143)](scene, camera);
const geometry = new _0x1c4452[(_0x3f17b0(0x14a))](0xa, 0x3, 0x80, 0xa),
    material = new _0x1c4452[(_0x3f17b0(0x156))]({ 'color': _0x3f17b0(0x142), 'wireframe': !![] }),
    torus = new _0x1c4452[(_0x3f17b0(0x161))](geometry, material);
scene['add'](torus);
const pointLight = new _0x1c4452['PointLight'](0xffffff);
pointLight[_0x3f17b0(0x153)]['set'](0x5, 0x5, 0x5);
const ambientLight = new _0x1c4452['AmbientLight'](0xffffff);
scene['add'](pointLight, ambientLight);
const gridHelper = new _0x1c4452['GridHelper'](0xc8, 0x32);
scene['add'](gridHelper);
const controls = new OrbitControls(camera, renderer[_0x3f17b0(0x15a)]);

function animate() { const _0x240167 = _0x3f17b0;
    requestAnimationFrame(animate), torus[_0x240167(0x15e)]['x'] += 0.01, torus[_0x240167(0x15e)]['z'] += 0.01, controls[_0x240167(0x14b)](), renderer['render'](scene, camera); }
animate();`;
    }
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
    const gitIgnoreContent = `node_modules`;
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
        "vite": "^4.0.4",
        "vercel": "^28.13.0"
    },
    "dependencies": {
        ${PROJECT_OPTIONS.map(option => `"${option.name}": "${option.v}"`).join(",\n")}
    }
    }`;
    const packageLockContent = `
    {
        "name": "${PROJECT_NAME}",
        "version": "1.0.0",
        "lockfileVersion": 2,
        "requires": true,
        "packages": {
          "": {
            "name": "${PROJECT_NAME}",
            "version": "1.0.0",
            "license": "ISC"
          }
        }
      }
    `;
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
    }
    `;

    fs.mkdirSync(`${PROJECT_NAME}/src`);
    fs.mkdirSync(`${PROJECT_NAME}/src/css`);
    fs.writeFileSync(`${PROJECT_NAME}/src/css/style.scss`, cssContent);
    fs.writeFileSync(`${PROJECT_NAME}/src/index.html`, htmlContent);
    fs.writeFileSync(`${PROJECT_NAME}/src/script.js`, jsContent);

    fs.mkdirSync(`${PROJECT_NAME}/static`);
    fs.mkdirSync(`${PROJECT_NAME}/static/assets`);

    fs.writeFileSync(`${PROJECT_NAME}/.gitignore`, gitIgnoreContent);
    fs.writeFileSync(`${PROJECT_NAME}/package.json`, packageContent);
    fs.writeFileSync(`${PROJECT_NAME}/package-lock.json`, packageLockContent);
    fs.writeFileSync(`${PROJECT_NAME}/vite.config.js`, viteConfigContent);

    console.log(`
    ${PROJECT_NAME} ${chalk.white.dim('got created\n')}
    ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――\n
    
    'npm i' ${chalk.white.dim('to install packages (copied to clipboard)')}
    'npm run dev' ${chalk.white.dim('to start dev server')}
    `);
    await clipboardy.write(`npm i`);
}

export default createViteProject;