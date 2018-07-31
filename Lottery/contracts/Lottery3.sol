pragma solidity ^0.4.17;

/*
    03查看所有投注彩票的人
    随机数 开奖  退款

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
    function enter()public view payable{
        require(msg.value == 1 ether);
        players.push(msg.sender);
    }

    //返回所有投注彩票的人
    function getAllPlayers()public view returns(address[]){
        return players;
    }

    //获取金额
    function getBalance()public view returns(uint){
        return this.balance;
    }
    //获取总体人数
    function getPlayers()public view returns(uint){
        return players.length;
    }

    //随机数
    function randoom()private view returns(uint){
        return uint(keccak256(block.difficulty,now,players));
    }

    //开奖
    function pickWinner()public  returns(address){
        uint index = randoom() % players.length;
        address winner =  players[index];
        players = new address[](0);
        winner.transfer(this.balance);
        return winner;
    }

    //返款功能
    function refund()public{
        for(uint i = 0;i<players.length;i++){
            players[i].transfer(1 ether);
        }
    }


}