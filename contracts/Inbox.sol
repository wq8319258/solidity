pragma solidity ^0.4.17;

contract Inbox{
    string public message;

    function Inbox(string _message){
        message = _message;
    }

    function setMessage(string _message)public{
        message = _message;
    }

    function getMessage()public returns(string){
        return message;
    }
}