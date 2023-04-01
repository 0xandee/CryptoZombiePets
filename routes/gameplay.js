//Models
var Gun = require("../models/Zombie");
var ClaimPoint = require("../models/ClaimPoint");

const Web3 = require('web3');
const web3 = new Web3('');

// get all GUN nft
const GUN_Address = "0xd3f1A4414b5D48eEeC29360eDF2E18EAcfD0B823";
const GUN_ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_domain","type":"string"},{"internalType":"address","name":"_tokenZPT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_id","type":"string"},{"indexed":false,"internalType":"address","name":"zombieOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"idzombie","type":"uint256"}],"name":"Admin_mint_zombie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"zombieIds","type":"uint256[]"}],"name":"Player_buy_zombie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"TokenZPT","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boxAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boxNFT","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyzombie_By_Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"domain","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameMaster","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"},{"internalType":"address","name":"zombieOwner","type":"address"},{"internalType":"int256","name":"amount","type":"int256"}],"name":"gameMaster_mintzombie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"getBoxInfo","outputs":[{"internalType":"uint256","name":"__boxTokenId","type":"uint256"},{"internalType":"uint256","name":"__boxType","type":"uint256"},{"internalType":"uint256","name":"__zombieAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"getBoxInfo2","outputs":[{"internalType":"uint256","name":"__zombieAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"getZombieAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxZombiePerPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price_token_per_zombie","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_boxNFT","type":"address"}],"name":"updateBoxAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newDomain","type":"string"}],"name":"update_Domain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"update_MaxZombiesPerPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"update_ZPT_Address","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"update_ZPT_per_zombie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"update_gameMasterAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawZPT","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const gunContract = new web3.eth.Contract(GUN_ABI, GUN_Address);

const FGC_Address = "0x0b4504095C5851c40b0BfFe33B3E463f052D8Bb8";
const FGC_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const fgcContract = new web3.eth.Contract(FGC_ABI, FGC_Address);


module.exports = function(app){

    app.get("/login", function(req, res){
        res.render("login");
    });

    app.get("/game", function(req, res){
        res.render("mainGame");
    });

    app.get("/play", function(req, res){
        res.render("play");
    });

    app.post("/verifyAccount", function(req, res){
        if(!req.body.hashString || !req.body.randS ){
            res.json({result:0, message:"Lack of parameters"});
        }else{
            let key = web3.eth.accounts.recover(req.body.randS,req.body.hashString);
            res.json({result:1, account:key});
        }
    });


    app.post("/newway_player_mint_gun", function(req, res){
        if(!req.body.transachtionHash){
            res.json({code:0, data:"Wrong parameters."});
        }else{
            var trans = req.body.transachtionHash;
            //console.log(trans + "2302");
            setTimeout(()=>{
                web3.eth.getTransactionReceipt(trans).then((dataTranInfo)=>{
                    //console.log(dataTranInfo);
                    if(dataTranInfo==null || dataTranInfo.status!=true){
                        res.json({code:0, data:"Error transaction get 1: " + trans});
                    }else{
                        web3.eth.getBlockNumber().then(no => {
                            gunContract.getPastEvents('Player_buy_zombie', {
                                filter: {transactionHash:trans}, 
                                fromBlock: no-1000,
                                toBlock: 'latest'
                            })
                            .then(function(events){
                                //console.log(events);
                                if(events.length<=0){
                                    res.json({code:0, data:"Get events error 3."});
                                }else{
                                    var gunsMinted = events[events.length-1].returnValues["zombieIds"];
                                    console.log("x1");
                                    console.log(gunsMinted);
                                    if(gunsMinted.length==0){
                                        res.json({code:0, data:"Get events error 4."});
                                    }else{
                                        var gunsArrayMintedInDb = [];
                                        checkGun(gunsMinted, 0, gunsMinted.length-1, gunsArrayMintedInDb, res);                                    
                                    }
                                }  
                            })
                            .catch((e)=>{
                                console.log(e);
                                res.json({code:0, data:"Get events error."});
                            });
                            
                        });                  
                    }
                }).catch((e)=>{
                    res.json({code:0, data:"Error transaction get 2."});
                });
            }, 4000);
            
            
        }
    });

    function checkGun(gunsMinted, ordering, max,gunsArrayMintedInDb, res){
        console.log("x3");
                                    console.log(gunsMinted);
        if(ordering<=max){
            //console.log("96 "+ gunsMinted[ordering]);
            get_1_gunsInfo_v2(gunsMinted[ordering])
            .then(()=>{
                Gun.findOne({gun_TokenId:gunsMinted[ordering]}, function(e, gunOne){
                    console.log(gunOne);
                    gunsArrayMintedInDb.push(gunOne);
                    ordering++; 
                    checkGun(gunsMinted, ordering, max,gunsArrayMintedInDb, res);
                });            
            })
            .catch(()=>{ordering++;checkGun(gunsMinted, ordering, max,gunsArrayMintedInDb, res);});
        }else{
            console.log("x2");
            console.log(gunsArrayMintedInDb);
            res.json({code:1, data:gunsArrayMintedInDb});
        }    
    }

    var get_1_gunsInfo_v2 = function(tokenId){
        
        return new Promise((resolve, reject)=>{
            console.log("eher");
            gunContract.methods.ownerOf(tokenId).call().then((addressOwner)=>{
                addressOwner = addressOwner.toLowerCase();
                console.log(addressOwner);
                Gun.findOne({gun_TokenId:tokenId}, function(err, gun){
                    if(!err){
                        console.log("Check x" + tokenId);
                        if(gun!=null){
                            console.log(tokenId + " is in db already");
                            Gun.findOneAndUpdate({_id:gun._id, status:0}, {status:1}, function(err){
                                resolve(tokenId);
                            });
                        }else{
                            console.log(tokenId + " is not in db 2");                                                        
    
                            var newGun = new Gun({
                                accountOwner:addressOwner,
                                gun_TokenId:tokenId,
                                type:Math.floor(Math.random() * 5),   //0,1,2,3,4 random
                                level:1,  //1,2,3,4,5
                                currentPoint:0,
                                status:1, // 1 exist, 2 fixing, 0 not exist
                                dateCreated:Date.now()
                            });
                            newGun.save(function(err){
                                if(!err){ 
                                    console.log("Save new token gun: " + newGun.gun_TokenId); 
                                    resolve(tokenId);
                                }
                            });
                        }
                    }else{
                        resolve(tokenId);
                    } 
                });
                
            }).catch((e)=>{
                console.log(e);
                if(e.data=="0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000294552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e0000000000000000000000000000000000000000000000"){
                    Gun.findOneAndUpdate({gun_TokenId:tokenId},{status:0}, function(err){
                        if(!err){
                            //console.log("Check status 0 of tokenId:"+ tokenId );
                            reject(tokenId);
                        }
                    });
                }else{
                    reject(tokenId);
                }
            });
            
        });
    }

    app.post("/getZombieAmount", function(req, res){
        if(!req.body.account){
            res.json({result:0, message:"Lack of parameters"});
        }else{
            var account = req.body.account.toLowerCase();
            gunContract.methods.getZombieAmount(account).call()
            .then((_total)=>{
                //var total = parseInt(web3.utils.hexToNumberString(_total, "ether"));
                res.send({result:1, amount:_total});
            })
            .catch((e)=>{console.log(e);res.send({result:0, message:"Error from bc."});});
        }
    });

    app.post("/getToken", function(req, res){
        if(!req.body.account){
            res.json({result:0, message:"Lack of parameters"});
        }else{
            var account = req.body.account.toLowerCase();
            gunContract.methods.getZombieAmount(account).call()
            .then((_total)=>{
                //var total = parseInt(web3.utils.hexToNumberString(_total, "ether"));
                res.send({result:1, amount:_total});
            })
            .catch((e)=>{console.log(e);res.send({result:0, message:"Error from bc."});});
        }
    });

    app.post("/getCurrentPoint", function(req, res){
        if(!req.body.account){
            res.json({result:0, message:"Lack of parameters"});
        }else{
            var account = req.body.account.trim().toLowerCase();
            ClaimPoint.find({accountOwner:account}, function(e, claims){
                if(e){
                    res.json({result:0, message:"Get info error."});
                }else{
                    var totalPoint = 0;
                    claims.forEach(function(c){
                        totalPoint += c.pointClaim;
                    });
                    res.json({result:1, account:account, point:totalPoint});
                }
            });
        }
    });

    //// get list zombie of user
    app.post("/getAllZombiesFromPlayers", function(req, res){
        if(!req.body.hashString || !req.body.randS ){
            res.json({result:0, message:"Lack of parameters"});
        }else{
            let key = web3.eth.accounts.recover(req.body.randS,req.body.hashString).toLowerCase();
            Gun.find({accountOwner:key}, function(e, guns){
                if(e){
                    res.json({result:0, message:"Database error"});
                }else{
                    res.json({result:1, guns:guns});
                }
            });            
        }
    });


    var speedPerMinute = [50,50,50,50,50]; // ZPT
    var maxToken = [120, 150, 280, 500, 1000];

    updatePoint();
    function updatePoint(){
        setTimeout(()=>{
            Gun.find({status:1}, function(e, data){
                if(!e && data.length>0){
                    data.forEach(function(pet){
                        if((pet.currentPoint+speedPerMinute[pet.type])<maxToken[pet.type]){
                            pet.currentPoint += speedPerMinute[pet.type];
                        }else{pet.currentPoint=maxToken[pet.type]}
                        
                        pet.save();
                    });
                }
            });
            updatePoint();
        }, 5000);
    }

    //// claim
    //// get list zombie of user
    var minToClaim=0;
    app.post("/claimAllPoint", function(req, res){
        if(!req.body.hashString || !req.body.randS ){
            res.json({result:0, message:"Lack of parameters"});
        }else{
            let key = web3.eth.accounts.recover(req.body.randS,req.body.hashString).toLowerCase();
            Gun.find({accountOwner:key}, function(e, zombies){
                if(e || zombies.length==0){
                    res.json({result:0, message:"Database error"});
                }else{
                    zombies.forEach(function(zom){
                        if(zom.currentPoint>maxToken[zom.type]/100*20){
                            var currentPointTemp = zom.currentPoint;
                            zom.currentPoint = 0;
                            zom.save(function(e2){
                                if(!e2){
                                    var newClaimPoint = new ClaimPoint({
                                        accountOwner:key,
                                        gun_TokenId:zom.gun_TokenId,
                                        type:zom.type,   //0..4
                                        pointClaim:currentPointTemp,
                                        dateCreated:Date.now()
                                    });
                                    newClaimPoint.save();
                                }
                            });
                        }
                    });
                    res.json({result:1});
                }
            });            
        }
    });
};