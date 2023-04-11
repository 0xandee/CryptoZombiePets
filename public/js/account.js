const web3 = new Web3(window.ethereum);

const FGC_Address = "0x0b4504095C5851c40b0BfFe33B3E463f052D8Bb8";
const FGC_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const Contract_FGC = web3.eth.Contract(FGC_ABI, FGC_Address);

const GUN_Address = "0xd3f1A4414b5D48eEeC29360eDF2E18EAcfD0B823";
const GUN_ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_domain","type":"string"},{"internalType":"address","name":"_tokenZPT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_id","type":"string"},{"indexed":false,"internalType":"address","name":"zombieOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"idzombie","type":"uint256"}],"name":"Admin_mint_zombie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"zombieIds","type":"uint256[]"}],"name":"Player_buy_zombie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"TokenZPT","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boxAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boxNFT","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyzombie_By_Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"domain","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameMaster","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"},{"internalType":"address","name":"zombieOwner","type":"address"},{"internalType":"int256","name":"amount","type":"int256"}],"name":"gameMaster_mintzombie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"getBoxInfo","outputs":[{"internalType":"uint256","name":"__boxTokenId","type":"uint256"},{"internalType":"uint256","name":"__boxType","type":"uint256"},{"internalType":"uint256","name":"__zombieAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"getBoxInfo2","outputs":[{"internalType":"uint256","name":"__zombieAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"getZombieAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxZombiePerPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price_token_per_zombie","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_boxNFT","type":"address"}],"name":"updateBoxAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newDomain","type":"string"}],"name":"update_Domain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"update_MaxZombiesPerPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"update_ZPT_Address","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"update_ZPT_per_zombie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"update_gameMasterAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawZPT","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const Contract_GUN = web3.eth.Contract(GUN_ABI, GUN_Address);

var price_FGC_per_gun = 1000;
var currentAccount = null;
var maxZombie = 20;

var getETH = function(address){
    return new Promise((resolve, reject)=>{
        web3.eth.getBalance(address).then((data)=>{
            resolve(parseFloat(web3.utils.fromWei(data, "ether")).toFixed(4));
        });
    });
}

var getZPT = function(address){
    console.log(Contract_FGC);
    return new Promise((resolve, reject)=>{
        Contract_FGC.methods.balanceOf(address).call(0,function(e, data){
            var amount = parseFloat(web3.utils.fromWei(String(data), "ether")).toFixed(0);
            resolve(amount);
        });
    });
}

function updatePointxxx(){
    console.log(currentAccount);
    getZPT(currentAccount).then((data)=>{
        console.log(data);
        $("#token_inwallet").html(formatMoney(parseFloat(data)));
    });

    $.post("./getCurrentPoint", {account:currentAccount}, function(data2){
        if(data2.result==1){
            $("#token_ingame").html(formatMoney(parseFloat(data2.point)));
        }
    });
}

$(document).ready(function(){
    playMuzikBg();
    if(getCookie("HASH")=="" || getCookie("RAND")==""){
        window.location="./";
    }else{
        $.post("./verifyAccount", {hashString:getCookie("HASH"), randS:getCookie("RAND")}, function(data){
            if(data.result!="1"){
                alert("Wrong authentication!");
                window.location="./";
            }else{
                currentAccount = data.account;
                $("#metamask").html("..."+data.account.slice(-10));
                console.log(22);
                updatePointxxx();
            }
        });
    }
});

function playMuzikBg(){
    var source = "./mp3/Spook3.mp3"
    var audio = document.createElement("audio");
    //
    audio.autoplay = true;
    //
    audio.load()
    audio.addEventListener("load", function() { 
        audio.play(); 
    }, true);
    audio.src = source;
}

///////// BUY ZOMBIE
var currentAmount = null;

function BuyGunByFGC(amount){
    var totalFGC = price_FGC_per_gun * parseInt(amount);

    $.post("./getZombieAmount", {account:currentAccount}, function(data){
        console.log(data);
        if(data.result==1){
            if((parseInt(data.amount)+parseInt(amount))<=maxZombie){
                $("#infoAlert").fadeIn(1500);
                //console.log(totalFGC);
                currentAmount = amount;
                Contract_FGC.methods.approve(GUN_Address, totalFGC + "000000000000000000").send({
                    from:currentAccount,
                    value:0
                }, (err, res)=>{
                    if(err){
                        $("#infoAlert").fadeOut(1500);
                    }else{
                        checkApproveTran(res);
                    }
                });
                /*$("#buyGun").click(function(){
                    
                });*/
            }else{
                alert("Sorry, you have reach maximum 20 zombie.");
            }
        }else{
            alert("Something is wrong, sorry.");
        }
    });
    
}

function checkApproveTran(hash){
    web3.eth.getTransactionReceipt(hash).then((data)=>{
        if(data==null || data.status!=true){
           // console.log(data);
            checkApproveTran(hash);
        }else{
            //console.log(data.status);
            Contract_GUN.methods.buyzombie_By_Token(currentAmount).send({
                from:currentAccount,
                value:0
            }, (err, res)=>{
                if(err){
                    $("#infoAlert").fadeOut(1500);
                }else{
                    checkBuyGunByToken(res);
                }
            });
        }
    })
}

function checkBuyGunByToken(hash){
    web3.eth.getTransactionReceipt(hash).then((data)=>{
        if(data==null || data.status!=true){
            //console.log(data);
            checkBuyGunByToken(hash);
        }else{
            //console.log("Gun gun xong" + data.status);  // true   
            
            $.post("./newway_player_mint_gun", {transachtionHash:hash}, function(data){
                console.log(data);
                $("#infoAlert").fadeOut(1500, function(){
                    if(data.code==1){
                        data.data.forEach(function(zom){
                            $("#craft").after(`<div class="mintedZombie" style="background-image: url('/images/avatar2/bg_`+zom.type+`.png');"></div>`);
                        });
                    }
                });
                //unityInstance.SendMessage('WaitingScreen', 'closeWaitingScreen_And_Showgun2', JSON.stringify(data)); 
            });   
            
        }
    })
}

$(document).on("click", ".mintedZombie", function(event){
    $(this).fadeOut(1000);
});


///////// end buy zmobie

function RandomString(dai){

    var mang = ["a","b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "p","q","r","s","y","u","v","x","y","z","w", 
                "A","B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P","Q","R","S","Y","U","V","X","Y","Z","W",
                "1","2","3","4","5","6","7","8","9"];

    //[i, l, I, L, o, 0, O]

    var kq = "";
    for(var i=0; i<dai; i++){
        kq = kq + mang[ Math.floor(Math.random() * mang.length) ]
    }

    return kq;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

window.ethereum.on("accountsChanged", function(accounts){
    window.location = "./";
    /*
    currentAccount = accounts[0];
    web3.eth.net.getId().then((net)=>{
        if(net!=97){
            alert("Please connect BSC Mainnet");
            window.location="./";
        }else{
            var randS = "SecretNumber:"+RandomString(24);
            web3.eth.personal.sign(randS, currentAccount, (err, sign)=>{
                unityInstance.SendMessage('Canvas', 'setNewAccount', sign+"_"+randS);
            });
        }
    });*/
});

function formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
    }, "") ;
    //}, "") + "." + p[1];
}