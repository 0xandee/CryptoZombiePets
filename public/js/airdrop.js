const web3 = new Web3(window.ethereum);
var currentAccount = null;
var domain = "https://app.zombiepets.io/";

const freeClaim_Address = "0x8C23AC4631AD0390bBd183faeEB8a341642d2C53";
const freeClaim_ABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"amountZPT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkUserClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim_ZPT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ordering","type":"uint256"}],"name":"getAddressUserClaim","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUsersClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenZPT","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"updateAmountZPT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_claimStatus","type":"bool"}],"name":"updateClaimStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"updateZPTAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users_Claimed","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const contract_freeClaim = web3.eth.Contract(freeClaim_ABI, freeClaim_Address);


$("#btnMetamask").click(function(){
    if(check_MetaMask()){
        connect_MetaMask()
        .then((data)=>{
            web3.eth.net.getId().then((netId) => {
                if(netId==97){ // testnet
                    currentAccount = data[0];
                    $(this).html("..."+currentAccount.substring(35));
                }else{
                    alert("Please login Binance Smart Chain Testnet, thank you.");
                }
            });
        })
        .catch((err)=>{
            alert("Please login Binance Smart Chain Testnet, thank you.");
        });
    }else{
        alert("Please install Meta Mask to login.");
    }
});

async function connect_MetaMask(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}

function check_MetaMask(){
    var result = false;
    if (typeof window.ethereum !== 'undefined') {
        result = true;
    }
    return result;
}

window.ethereum.on('accountsChanged', function (accounts) {
    location.reload();
    /*web3.eth.net.getId().then((netId) => {
        if(netId==97){
            currentAccount = accounts[0];
            $(this).html("..."+currentAccount.substring(35));
        }else{
            alert("Please login Binance Smart Chain Mainnet, thank you.");
        }
    });*/
});


$('.valStatus').val(0);
$('.vGetLink').click(function() {
    var id = $(this).attr('data-id');
    $('#img_' + id).attr('src', '/images/v2/yes.png');
    $('#value_' + id).val(1);
    checkValueIsClick();
});

function checkValueIsClick()
{
    var isCheck = 0;
    $('.valStatus').each(function() {
        var value = $(this).val();
        if (value == 1) {
            isCheck += 1;
        }
    });

    if (isCheck == 4) {
        $('#buttonClam').prop("disabled", false);
    }
}


$('#buttonClam').click(function () {
    if(currentAccount==null){
        var myModal = new bootstrap.Modal(document.getElementById('valert'), {
            keyboard: false
        });
        myModal.show();
    }else{
        contract_freeClaim.methods.claim_ZPT().send({from:currentAccount}).once('transactionHash', function(hash){ 
            alert("Thank you for your claiming.<br/>Click <a href='https://testnet.bscscan.com/tx/"+hash+"' target='_blank'>here</a> to check your transaction.");
        })
    }
});