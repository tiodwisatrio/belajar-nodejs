// Mengetahui DNS (Domain Name Server) pada Website
import dns from 'dns/promises';

const address = await dns.lookup("www.programmerzamannow.com");
console.log(address.address);
console.log(address.family);