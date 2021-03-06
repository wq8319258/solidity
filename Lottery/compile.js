const fs = require("fs");
const path = require("path");
const solc = require("solc");

let srcPath = path.resolve(__dirname, "contracts", "lotteryTest.sol");
let source = fs.readFileSync(srcPath, 'utf-8');
let result = solc.compile(source, 1);
module.exports = result.contracts[":Inbox"];




const rcc =
    {
        contracts:
            {
                ':Inbox':
                    {
                        assembly: [Object],
                        bytecode:
                            '608060405234801561001057600080fd5b50610355806100206000396000f3006080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663368b8772811461005b578063ce6d41de146100b6578063e21f37ce14610140575b600080fd5b34801561006757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100b49436949293602493928401919081908401838280828437509497506101559650505050505050565b005b3480156100c257600080fd5b506100cb61016c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101055781810151838201526020016100ed565b50505050905090810190601f1680156101325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014c57600080fd5b506100cb610203565b8051610168906000906020840190610291565b5050565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156101f85780601f106101cd576101008083540402835291602001916101f8565b820191906000526020600020905b8154815290600101906020018083116101db57829003601f168201915b505050505090505b90565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102d257805160ff19168380011785556102ff565b828001600101855582156102ff579182015b828111156102ff5782518255916020019190600101906102e4565b5061030b92915061030f565b5090565b61020091905b8082111561030b57600081556001016103155600a165627a7a7230582084709b760aebb2c4d0b785e23c94933efbd34f07af405f29d15c4a840ff265d80029',
                        functionHashes:
                            [Object],
                        gasEstimates:
                            [Object],
                        interface:
                            '[{"constant":false,"inputs":[{"name":"_message","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]',
                        metadata:
                            '{"compiler":{"version":"0.4.24+commit.e67f0147"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"_message","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"Inbox"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0xcba6f10f45b20ed04df2583c03355616534fd6c1ca700cc051b2625dd62b7a71","urls":["bzzr://f93bff577b2b1c4ac3e30ae5bf087428df0edc72dfaadc9876444dee46646c0e"]}},"version":1}',
                    }
            }
    };
