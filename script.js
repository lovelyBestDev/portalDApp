let account;
let transactions = []

// const tokenContractAddress = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709';
const portalContractAddress = '0x94467307678d930B7BC88982271224eE8565Ee40';

$(document).ready(function () {
  getAccountAddress();
});


function getAccountAddress() {
  web3js = new Web3(web3.currentProvider);
  web3js.eth.getAccounts(async function (err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      // $("#test").text("disconnect Wallet");
      return;
    }
    else {
      account = accounts[0];
      // $("#test").text(account);

      getAllTransaction();
    }
  });
}


function connectWallet() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    console.log('MetaMask Here!');
  }
  if (account == undefined && window.ethereum) {
    const web3 = new Web3(window.ethereum);
    ethereum.enable().then((accounts) => {
      account = accounts[0];
      // $('#test').text(account);

      getAllTransaction();
    });
  }
}

async function getAllTransaction() {
  transactions = [];

  const web3js = new Web3(web3.currentProvider)
  var PortalContract = new web3js.eth.Contract(portalABI, portalContractAddress);

  var history = await PortalContract.methods.getAllHistory().call({ from: account });

  if(history.length > 0) {
    for (var i = 0; i < history.length; i++) {
      transactions.push({
        'name': history[i].fullName,
        'wallet_address': history[i].wallet,
        'telegram': "@" + history[i].telegram,
        'twitter': "@" + history[i].twitter,
        'amount': Number(history[i].amount) / 1000000000000000000,
        'txn': history[i].txn
      })
    }
    displayTransactions();
  }
}

function displayTransactions() {
  if (transactions.length > 0) {
    var temp = ""
    $('#table_body').html('')
    for (var i = 0; i < transactions.length; i++) {
      temp += "<tr>"
      temp += "<td style='padding-left: 22px;'>" + (i + 1) + ".</td>"
      temp += "<td>" + transactions[i].name + "</td>";
      temp += "<td style='font-size: 12px !important;'>" + transactions[i].wallet_address + "</td>";
      temp += "<td>" + transactions[i].telegram + "</td><td>" + transactions[i].twitter + "</td><td>" + transactions[i].amount + "</td>";
      temp += "<td style='font-size: 12px !important;'>" + transactions[i].txn.slice(0, 11) + "....." + transactions[i].txn.slice(62) + "</td>";
      temp += "</tr>"
    }
    $('#table_body').html(temp)
  }

  $("#fullName").val('');
  $("#telegram").val('');
  $("#twitter").val('');
  $("#amount").val('BNB_0.5');
}


async function submit() {
  if (account != undefined) {
    var fullName = $("#fullName").val();
    var telegram = $("#telegram").val() != "" ? $("#telegram").val() : "-";
    var twitter = $("#twitter").val() != "" ? $("#twitter").val() : "-";
    var amount = $("#amount").val().split('_')[1]

    if (fullName == "" || amount == "") {
      alert("error")
      return;
    }

    const web3js = new Web3(web3.currentProvider)

    var vamount = web3js.utils.toWei(amount.toString(), "ether");

    var PortalContract = new web3js.eth.Contract(portalABI, portalContractAddress);
    var temp_trans = await PortalContract.methods.transfer(fullName, telegram, twitter).send({ from: account, value: vamount });

    await PortalContract.methods.putNewHistory(temp_trans.transactionHash).send({ from: account });
    getAllTransaction();
  }
}