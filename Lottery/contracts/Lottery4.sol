pragma solidity ^0.4.17;


/*
    04查看所有投注彩票的人
    管理员操作 及 抽取作为修饰符

*/
contract Lottery3{
    address public manager;
    address[] public players;

    function Lottery3()public{
        manager = msg.sender;
    }

    function getManager()public view returns(address){
        return manager;
    }

    //投注
    function enter()public  payable{
        require(msg.value == 1 ether);
        players.push(msg.sender);
    }

    //返回所有投注彩票的人
    function getAllPlayers()public view returns(address[]){
        return players;
    }

    //总金额
    function getBalance()public view returns(uint){
        return this.balance;
    }

    //参加人数
    function getPlayers()public view returns(uint){
        return players.length;
    }

    //随机数
    function randoom()private view returns(uint){
        //1.平均时间   2.现在时间   3.参与人数    生成一个随机数
        return uint(keccak256(block.dif54321ficulty,now,players));
    }

    //开奖
    function pickWinner()public  onlyManagerCanCall returns(address){
        uint index = randoom() % players.length;
        address winner =  players[index];
        players = new address[](0);
        winner.transfer(this.balance);
        return winner;
    }

    function refund()public onlyManagerCanCall{

        for(uint i = 0;i<players.length;i++){
            players[i].transfer(1 ether);
        }
    }
    //用modifier 把管理员代码抽取出来做成修饰符
    modifier onlyManagerCanCall() {
        require(msg.sender == manager);
        _;
    }


}