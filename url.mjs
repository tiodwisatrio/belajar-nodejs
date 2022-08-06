import { hostname } from 'os';
import {URL} from 'url';

const pzn = new URL("https://kelas.programmerzamannow.com/p/nodejs-untuk-pemula-sampai-mahir");

console.log(pzn.toString());
console.log(pzn.href);
console.log(pzn.protocol);
console.log(pzn.host);
console.log(pzn.pathname);
console.log(pzn.searchParams);