const web3 = new Web3(window.ethereum);
var currentAccount = null;
var domain = "";
/*
const nft_Address = "0x588c18fD8Fa6BdE45188034945E2cE2c220090D4";
const nft_ABI = [{inputs: [{internalType: "address", name: "token_address", type: "address"}], stateMutability: "nonpayable", type: "constructor"}, {inputs: [], name: "checkOwner", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"}, {inputs: [], name: "checkUserClaimed", outputs: [{internalType: "bool", name: "", type: "bool"}], stateMutability: "view", type: "function"}, {inputs: [], name: "claimStatus", outputs: [{internalType: "bool", name: "", type: "bool"}], stateMutability: "view", type: "function"}, {inputs: [], name: "claim_token_no_ref", outputs: [], stateMutability: "nonpayable", type: "function"}, {inputs: [{internalType: "address", name: "_ref", type: "address"}], name: "claim_token_with_ref", outputs: [], stateMutability: "nonpayable", type: "function"}, {inputs: [], name: "commission_ref", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"}, {inputs: [{internalType: "address", name: "_address", type: "address"}], name: "count_number_claimed", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"}, {inputs: [], name: "maxRef", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"}, {inputs: [], name: "token_quantity_per_claim", outputs: [{internalType: "uint256", name: "", type: "uint256"}], stateMutability: "view", type: "function"}, {inputs: [{internalType: "bool", name: "_newStatus", type: "bool"}, {internalType: "uint256", name: "_new_token_quantity_per_claim", type: "uint256"}, {internalType: "uint256", name: "_new_commission_ref", type: "uint256"}], name: "updateClaimRatio", outputs: [], stateMutability: "nonpayable", type: "function"}, {inputs: [{internalType: "address", name: "_newTokenAddress", type: "address"}], name: "updateToken", outputs: [], stateMutability: "nonpayable", type: "function"}, {inputs: [{internalType: "uint256", name: "_maxRef", type: "uint256"}], name: "update_max_Ref", outputs: [], stateMutability: "nonpayable", type: "function"}, {inputs: [{internalType: "uint256", name: "", type: "uint256"}], name: "users_Claimed", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"}, {inputs: [{internalType: "uint256", name: "", type: "uint256"}], name: "users_Ref", outputs: [{internalType: "address", name: "", type: "address"}], stateMutability: "view", type: "function"}, {inputs: [], name: "withdraw_token", outputs: [], stateMutability: "nonpayable", type: "function"}];
const contract_NFT = web3.eth.Contract(nft_ABI, nft_Address);
*/
//testnet
const freeClaim_Address = "0x43Ef7Ecb094A7aF81D643a7E3CC264803AEEF7Eb";
const freeClaim_ABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"amountFGC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkUserClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim_FGC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ordering","type":"uint256"}],"name":"getAddressUserClaim","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUsersClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenFGC","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"updateAmountFGC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_claimStatus","type":"bool"}],"name":"updateClaimStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"updateFGCAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users_Claimed","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const contract_freeClaim = web3.eth.Contract(freeClaim_ABI, freeClaim_Address);


$(document).ready(function(){

    window.ethereum.on('accountsChanged', function (accounts) {
        web3.eth.net.getId().then((netId) => {
            if(netId==56){
                currentAccount = accounts[0];
                $("#btn_connect_MM img").fadeOut(200);
                $("#btn_connect_MM span").html("..."+currentAccount.substring(35));
            }else{
                alert("Please login Binance Smart Chain Mainnet, thank you.");
            }
        });
    });

    $("#btn_connect_MM").click(function(){
        if(check_MetaMask()){
            connect_MetaMask()
            .then((data)=>{
                web3.eth.net.getId().then((netId) => {
                    if(netId==97){
                        currentAccount = data[0];
                        $("#btn_connect_MM img").fadeOut(200);
                        $("#btn_connect_MM span").html("..."+currentAccount.substring(35));
                    }else{
                        alert("Please login Binance Smart Chain Testnet, thank you.");
                    }
                });
            })
            .catch((err)=>{
                
            });
        }else{
            alert("Please install Meta Mask to login.");
        }
    });

	$("#buttonClam").click(function(){
		if(currentAccount==null){
			alert("Please login Meta Mask to claim token.");
		}else{
            var query = getQueryParams(document.location.search);
            if(query.ref == undefined){
                
                contract_NFT.methods.claim_token_no_ref().send({from:currentAccount}).once('transactionHash', function(hash){ 
                    alert("Thank you for your claiming.<br/>Click <a href='https://bscscan.com/tx/"+hash+"' target='_blank'>here</a> to view your transaction.");
                })
            }else{
                if(query.ref.length>10){
                   
                    contract_NFT.methods.claim_token_with_ref(query.ref).send({from:currentAccount}).once('transactionHash', function(hash){ 
                        alert("Thank you for your claiming.<br/>Click <a href='https://bscscan.com/tx/"+hash+"' target='_blank'>here</a> to view your transaction.");
                    })
                }
            }
			
		}
	});

	$("#btnGetFreeFGC").click(function(){
		if(currentAccount==null){
			alert("Please login Meta Mask to claim token.<br>Remeber to use Binance Smartchain Testnet. ");
		}else{
            contract_freeClaim.methods.claim_FGC().send({from:currentAccount}).once('transactionHash', function(hash){ 
				alert("Thank you for your claiming.<br/>Click <a href='https://testnet.bscscan.com/tx/"+hash+"' target='_blank'>here</a> to check your transaction.");
			})	
		}
	});

	

    $("#refLink").click(function(){
        if(currentAccount==null){
            alert("Please login Meta Mask to create your referral link.");
        }else{
            var copyText = domain + "airdrop?ref="+currentAccount;
            navigator.clipboard.writeText(copyText);
            alert("Your referral link is copied to keyboard.");
        }
    });

    var getETH = function(account){
        return new Promise((resolve, reject)=>{
            web3.eth.getBalance(account).then((data)=>{
                resolve(parseFloat(web3.utils.fromWei(data, "ether")).toFixed(4));
            });
        });
    };

    var getToken_Meta = function(account){
        return new Promise((resolve, reject)=>{
            contract_Token.methods.balanceOf(account).call().then((meta)=>{
                resolve(web3.utils.fromWei(web3.utils.hexToNumberString(meta, "ether"), "ether"));
            });
        });
    }

    function updateBalance(){
        getETH(currentAccount).then((data)=>{
            $("#current_eth").html(data);
        });
        getToken_Meta(currentAccount).then((data)=>{
            $("#current_meta").html(numberWithCommas(data));
        });
    }

});

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

//var query = getQueryParams(document.location.search);
//alert(query.foo);

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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}