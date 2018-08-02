const ganache = require("ganache-cli");
const Web3 = require("web3");
const {interface,bytecode} = require("../compile");
const web3 = new Web3(ganache.provider());//把Ganache测试环境卡插到web3 里

describe('测试智能合约',()=>{


    it('测试web3版本', function () {
        console.log(web3.version)
    });

  /*  it('测试',()=>{
        web3.eth.getAccounts(
        ).then((accounts)=>{
            console.log(accounts);
        });
    });


     it('获取账户余额',async ()=>{
        const accounts =  await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(accounts[0]);
        let ether = web3.utils.fromWei(balance);
         console.log(ether)
    })*/

    it('测试部署智能合约',async()=>{
        const accounts =  await web3.eth.getAccounts();

     const result = await  new web3.eth.Contract(JSON.parse(interface))
            .deploy({
                data:bytecode,
                arguments:['abc']
            })
            .send({
                from:accounts[0],
                gas:1000000
            });

        console.log(result.options.address);
        console.log(await result.methods.getMessage().call());

        await result.methods.setMessage("itsol").send({
            from:accounts[0],
            gas:1000000
        });
        console.log(await result.methods.getMessage().call());

    });


});
