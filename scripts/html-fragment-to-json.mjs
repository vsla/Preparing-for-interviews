import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sectionsDir = path.join(__dirname, '../src/content/sections');
const outDir = path.join(__dirname, '../src/content/json');

function fragmentToJson(html, slug) {
  const $ = cheerio.load(`<div id="__root">${html}</div>`);
  const root = $('#__root');

  const h2 = root.children('h2').first();
  if (!h2.length) throw new Error(`${slug}: missing h2`);

  const intro = root.children('p.section-intro').first();
  if (!intro.length) throw new Error(`${slug}: missing .section-intro`);

  const headerHtml = $.html(h2).trim();
  const introHtml = $.html(intro).trim();

  const topics = [];
  root.children('details').each((_, el) => {
    const d = $(el);
    const summary = d.find('> summary').first().text().trim();
    const body = d.find('> .details-body').first();
    if (!summary) throw new Error(`${slug}: details missing summary`);
    if (!body.length) throw new Error(`${slug}: details missing .details-body`);
    topics.push({
      summary,
      bodyHtml: body.html()?.trim() ?? '',
    });
  });

  const kt = root.children('.key-takeaways').first();
  if (!kt.length) throw new Error(`${slug}: missing .key-takeaways`);

  const title = kt.find('> h3').first().text().trim();
  const itemsHtml = [];
  kt.find('> ul > li').each((_, li) => {
    itemsHtml.push($(li).html()?.trim() ?? '');
  });

  return {
    slug,
    headerHtml,
    introHtml,
    topics,
    keyTakeaways: {
      title,
      itemsHtml,
    },
  };
}

function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs
    .readdirSync(sectionsDir)
    .filter((f) => f.endsWith('.html'))
    .sort();

  if (files.length === 0) {
    console.error(
      'No .html files in src/content/sections. Add fragment HTML files (e.g. from backup) before running migrate:content.'
    );
    process.exit(1);
  }

  for (const file of files) {
    const slug = file.replace(/\.html$/, '');
    const html = fs.readFileSync(path.join(sectionsDir, file), 'utf8');
    const data = fragmentToJson(html, slug);
    const outPath = path.join(outDir, `${slug}.json`);
    fs.writeFileSync(outPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
    console.log('wrote', outPath, 'topics', data.topics.length);
  }
}

main();
