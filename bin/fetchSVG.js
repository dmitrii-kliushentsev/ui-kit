// eslint-disable-next-line @typescript-eslint/no-var-requires
const got = require('got');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ensureDir, writeFile } = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join, resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Figma = require('figma-js');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PQueue = require('p-queue');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { FIGMA_TOKEN, FIGMA_FILE_URL, FIGMA_FRAME_ID } = process.env;

const options = {
  format: 'svg',
  outputDir: './src/',
  scale: '1',
};

for (const arg of process.argv.slice(2)) {
  const [param, value] = arg.split('=');
  if (options[param]) {
    options[param] = value;
  }
}

if (!FIGMA_TOKEN) {
  throw Error('Cannot find FIGMA_TOKEN in process!');
}

const client = Figma.Client({
  personalAccessToken: FIGMA_TOKEN,
});

// Fail if there's no figma file key
let fileId = null;
if (!fileId) {
  try {
    fileId = FIGMA_FILE_URL.match(/file\/([a-z0-9]+)\//i)[1];
  } catch (e) {
    throw Error('Cannot find FIGMA_FILE_URL key in process!');
  }
}

console.log(`Exporting ${FIGMA_FILE_URL} components`);

client.fileNodes(fileId, { ids: [FIGMA_FRAME_ID] })

  .then(({ data }) => data.nodes[FIGMA_FRAME_ID].components)
  .then(components => {
    console.log('Getting export urls', components);
    return client.fileImages(
      fileId,
      {
        format: options.format,
        ids: Object.keys(components),
        scale: options.scale,
      },
    ).then(({ data }) => {
      for (const id of Object.keys(data.images)) {
        components[id].image = data.images[id];
      }
      return components;
    });
  })
  .then(components => ensureDir(join(options.outputDir))
    .then(() => writeFile(resolve(options.outputDir, 'data.json'), JSON.stringify(components), 'utf8'))
    .then(() => components))
  .then(components => {
    const contentTypes = {
      svg: 'image/svg+xml',
      png: 'image/png',
      jpg: 'image/jpeg',
    };
    return queueTasks(Object.values(components).map(component => () => got.get(component.image, {
      headers: {
        'Content-Type': contentTypes[options.format],
      },
      encoding: (options.format === 'svg' ? 'utf8' : null),
    })
      .then(response => ensureDir(join(options.outputDir, options.format))
        .then(() => writeFile(join(options.outputDir, options.format, `${component.name}.${options.format}`), response.body, (options.format === 'svg' ? 'utf8' : 'binary'))))));
  })
  .catch(error => {
    throw Error(`Error fetching components from Figma: ${error}`);
  });

function queueTasks(tasks, options) {
  const queue = new PQueue({ concurrency: 3, ...options });
  for (const task of tasks) {
    queue.add(task);
  }
  queue.start();
  return queue.onIdle();
}
