// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const { error } = require('console');

// http.createServer((req, res) => {
//     const src = fs.createReadStream('./index.html'); src.pipe(res);
// }).listen(3000);

const dns = require('node:dns');
const options = {
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup('www.miu.edu/', options, (err, address, family) =>
    console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

// When options.all is true, the result will be an Array.
options.all = true;
dns.lookup('www.miu.edu/', options, (err, addresses) =>
    console.log('addresses: %j', addresses));
// addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]