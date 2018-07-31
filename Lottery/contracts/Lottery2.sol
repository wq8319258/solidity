pragma solidity ^0.4.17;
/*02查看所有投注彩票的人*/
contract Lottery2{
    address public manager;
    address[] public players;

    function Lottery2() public{
        manager = msg.sender;
    }

    function getManger()public view returns(address){
        return manager;
    }

    function enter()public payable{
        require(msg.value == 1 ether);
        players.push(msg.sender);
    }

    //返回所有投注彩票的人
    function getAllPlayers()public returns(address[]){
        return players;
    }

}