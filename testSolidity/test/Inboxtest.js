let assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web = new Web3(ganache.provider());

describe("测试智能合约",()=>{
    it('web3的版本',()=> {
        console.log(web.version);
    });
});

