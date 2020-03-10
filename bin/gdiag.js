#!/usr/bin/env node
const F = require('fs');
const P = require('path');
const moment = require('moment');
const glob = require('glob');
const fetch = require('node-fetch');
const winston = require('winston');
const util = require('util');
const CP = require('child_process');

const exec = util.promisify(CP.exec);

const log = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({})
    ]
});

const argv = require('yargs')
    .scriptName('gdiag')
    .option('working-directory', {
        alias: 'w',
        default: 'src',
        describe: 'The directory where the PlantUML files will be discovered and rendered.',
        type: 'string'
    })
    .option('technical-directory', {
        alias: 't',
        default: '.gdiag',
        describe: 'The directory where technical resources will be stores.',
        type: 'string'
    })
    .option('java-command', {
        alias: 'j',
        default: 'java',
        describe: 'The command of the java binary.',
        type: 'string'
    })
    .option('clean', {
        alias: 'c',
        default: false,
        describe: 'Delete recursively the pictures located in the working directory.',
        type: 'boolean'
    })
    .help()
    .usage('$0', 'Render PlantUML diagrams discovered in the working directory.')
    .argv;

const techDir = argv.t;
const latestRunFile = P.join(argv.t, 'LATEST_RUN');
const workDir = argv.w;
const doCleaning = argv.c;
const javaCmd = argv.j;

async function plantuml(file) {
    const child = await exec(`${javaCmd} -jar ${techDir}/plantuml.jar ${file}`, {
        stdio: process.stdout
    });
}

async function download(url, destination) {
    const directory = P.dirname(destination);
    if (!F.existsSync(directory)) {
        log.info('create destination directory [%s]', directory);
        F.mkdirSync(directory, {recursive: true});
    }
    if (!F.existsSync(destination)) {
        log.info('download [%s] to [%s]', url, destination);
        const resource = await fetch(url);
        const dest = F.createWriteStream(destination);
        resource.body.pipe(dest);
    }
}

async function downloadPlantUML() {
    const url = `http://sourceforge.net/projects/plantuml/files/plantuml.jar/download`;
    const destination = `${techDir}/plantuml.jar`;
    await download(url, destination);
}

async function cleanDirectory(directory) {
    log.info('clean directory [%s]', directory);
    const pictures = glob.sync(`**/*.png`, {
        cwd: directory
    });
    for (const picture of pictures) {
        log.info('delete [%s]', picture);
        // F.unlinkSync(picture);
    }
}

async function getLatestRun() {
    if (F.existsSync(latestRunFile)) {
        const stat = F.statSync(latestRunFile);
        log.info('ran previously on [%s]', stat.mtime);
        return moment(stat.mtime);
    }
    log.info('never ran previously');
}

async function setLatestRun() {
    F.writeFileSync(latestRunFile, '');
}

async function cleanLatestRun() {
    if (F.existsSync(latestRunFile)) {
        F.unlinkSync(latestRunFile);
    }
}

async function parseDirectory(directory, latestRun) {
    log.info('parse directory [%s]', directory);
    const sources = glob.sync(`**/*.{puml,plantuml}`, {
        cwd: directory
    });
    for (const source of sources) {
        const file = P.join(directory, source);
        const stat = F.statSync(file);
        if (!latestRun || moment(stat.mtime).isAfter(latestRun)) {
            log.info('process source [%s]', source);
            await plantuml(file)
        }
    }
}

(async function execute() {
    await downloadPlantUML();
    if (doCleaning) {
        await cleanLatestRun();
        await cleanDirectory(workDir);
    }
    const latestRun = await getLatestRun();
    await parseDirectory(workDir, latestRun);
    await setLatestRun();
}()).catch(e => {
    log.error('gdiag failed');
    log.error(e);
});
