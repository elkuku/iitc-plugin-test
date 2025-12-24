import fs from 'fs'

console.log('Generating GitHub page...')

fs.rmSync('gh_page', { recursive: true, force: true });
fs.mkdirSync('gh_page', { recursive: true });

fs.cpSync('dist', 'gh_page/files', { recursive: true });
fs.cpSync('.github/page', 'gh_page', { recursive: true });

const fileNames = fs
    .readdirSync('dist', { withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
    .filter(name => !name.endsWith('meta.js'))

const pluginData = JSON.parse(
    fs.readFileSync('plugin.json', 'utf8')
)

const baseUrl = 'files'
const links = fileNames
    .map(name => `<li><a href="${baseUrl}/${name}">${name}</a></li>`)
    .join("\n");

let template = fs.readFileSync('gh_page/index.html', 'utf8');

const projectName = pluginData.name.replace('IITC plugin: ', '')

template = template.replace("{{FILE_LINKS}}", links);
template = template.replaceAll("{{PROJECT_NAME}}", projectName);
template = template.replace("{{PROJECT_DESCRIPTION}}", pluginData.description);

fs.writeFileSync('gh_page/index.html', template, 'utf8');

console.log('Finished =;)')