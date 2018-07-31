pragma solidity ^0.4.17;

/*01投注彩票*/
contract Lottery1{

    address public manager;
    address[] public players;

    function Lottery()public {
        manager = msg.sender;
    }

    function getManager()public view returns(address){
        return manager;
    }
    //投注彩票
    function enter()public payable{
        require(msg.value == 1 ether);
        players.push(meg.sender);
    }
}
