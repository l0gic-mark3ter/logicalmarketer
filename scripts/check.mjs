import {readFile,stat} from 'node:fs/promises';
const root=new URL('../',import.meta.url);const html=await readFile(new URL('index.html',root),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if(new Set(ids).size!==ids.length)throw Error('Duplicate HTML IDs');
for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)){const ref=m[1];if(ref.startsWith('#')){if(ref.length>1&&!ids.includes(ref.slice(1)))throw Error(`Missing anchor ${ref}`);}else if(!/^(https?:|mailto:)/.test(ref)){await stat(new URL(ref,root));}}
JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
for(const name of ['logo','amir','calls-132','calls-108','calls-91','calls-312','google-search','inquiry-6','inquiry-7','inquiry-14']){const data=await readFile(new URL(`assets/images/${name}.webp`,root));if(data.toString('ascii',0,4)!=='RIFF'||data.toString('ascii',8,12)!=='WEBP')throw Error(`${name} is not WebP`);console.log(`${name}.webp: ${(data.length/1024).toFixed(1)} KB`);}
if(!html.includes('Ongoing SEO, maintenance, and long-term marketing plans are separate.'))throw Error('Missing pricing scope clarification');
console.log('Passed: local asset references, section anchors, unique IDs, structured data, and WebP signatures.');
