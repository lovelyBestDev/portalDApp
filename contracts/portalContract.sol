// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract portalContract {
    struct HistoryInfo {
        string fullName;
        address wallet;
        string telegram;
        string twitter;
        uint amount;
        string txn;
    }

    HistoryInfo[] histories;
    HistoryInfo temp;
    uint8 flag = 0;
    address receiver;
    // ERC20 public BNBcontract;

    // constructor(address _to, address _token) {
    constructor(address _to) {
        receiver = _to;
        // BNBcontract = ERC20(_token);
    }

    function transfer(string memory _fullName, string memory _telName, string memory _twiName) external payable {        
        payable(receiver).transfer(msg.value);
        // require(BNBcontract.allowance(msg.sender, address(this)) >= _amount);
        // BNBcontract.transferFrom(msg.sender, receiver, _amount);
       
        temp.fullName = _fullName;
        temp.wallet = msg.sender;
        temp.telegram = _telName;
        temp.twitter = _twiName;
        temp.amount = msg.value;

        flag = 1;
    }


    function putNewHistory(string memory _txn) external {
        if(flag == 1) {
            temp.txn = _txn;
            histories.push(temp);
            flag = 0;
        }
    }

    function getAllHistory() external view returns(HistoryInfo[] memory){
        return histories;
    }
}
