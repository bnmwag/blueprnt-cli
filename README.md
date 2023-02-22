
# Project create cli

i was a bit bored and was thinking on how i can make my coding expirience easier and faster.  
So i created a custom cli which creates me folder structures based on some templates i like to work with



## Installation

Install my-project with npm

```bash
  npm i cpr-bnm@latest -g
```


## Usage/Examples

```bash
  npx create
```


## Currently integrated layouts

- Vite template
```bash
my-project
├── .vscode
│   └── settings.json
├── src
│   ├── css
│   │   └── style.scss
│   ├── index.html
│   └── script.js
├── static
│   └── assets
├── .gitignore
├── package-lock.json
├── package.json
└── vite.config.js
```

- next.js 13 template
```bash
simple next.js 13 (beta) tree
```

- Basic HTML/CSS/JS setup
```bash
my-project
├── .vscode
│   └── settings.json
├── assets
│   ├── css
│   │   └── style.scss
│   └── js
│       └── script.js
├── media
│   ├── font
│   ├── icon
│   ├── img
│   └── video
└── index.html
```
- hopefully more in the future...


## Tech Stack

node.js