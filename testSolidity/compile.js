const path = require("path");
const fs = require("fs");
const solc = require("solc");
const inboxPath = path.resolve(__dirname,"contracts","Inbox.sol");
//console.log(inboxPath);

const readInbox = fs.readFileSync(inboxPath,'utf-8');
const result = solc.compile(readInbox,1);
//console.log(result);

//把合约里的内容暴露出来
module.exports = result.contracts[":Inbox"];
