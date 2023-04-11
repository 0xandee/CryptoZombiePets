var maxToken = [120, 150, 280, 500, 1000];

$(document).ready(function(){
    $("#infoAlert").fadeOut(0);
    loadAllGunsFromPlayer();
});
function quanlyPet(idPet, loaiPet, token){

    //tao Pet
    TaoPet(idPet, loaiPet, token);

    //set vi tri dau tien: top 300-450, left 100-800
    setViTriDauTien(idPet);

    //tim random vi tri

    // move toi vi tri
}

function TaoPet(idPet, loaiPet, token){
    $("#bg").append(`
    <div class="pet" idPet="`+idPet+`">
        <div class="bubblexxx" idPet="`+idPet+`">
            `+token+`
        </div>
        <div>
        <div id="charactor">
            <img class="size`+loaiPet+`" id="char`+idPet+`" loaiPet="`+loaiPet+`" src="./images/small/`+loaiPet+`.gif" alt="">
        </div>
    </div>
    `);
}

function setViTriDauTien(idPet){
    var top = Math.floor(Math.random() * 150)+280; // 300-450
    var left = Math.floor(Math.random() * 700)+100; // 100-800
    $(".pet[idPet='"+idPet+"']").css("top", top + "px");
    $(".pet[idPet='"+idPet+"']").css("left", left + "px");
    TimViTriVaDiChuyen(idPet);
}

function TimViTriVaDiChuyen(idPet){

    var top = Math.floor(Math.random() * 150)+250; // 300-450
    var left = Math.floor(Math.random() * 700)+100; // 100-800

    if(top>250 && top<370 && left>100 && left<800){

        var loaiPet = $("#char"+idPet).attr("loaiPet") + "";
        var currentLeft = parseFloat($(".pet[idPet='"+idPet+"']").css("left"));
      
        if(left<currentLeft){
            $("#char"+idPet).attr("loaiHuong", "1");
            $("#char"+idPet).attr("src", "./images/small/"+loaiPet+loaiPet+".gif");
        }
    
        if(left>currentLeft){
            $("#char"+idPet).attr("loaiHuong", "0");
            $("#char"+idPet).attr("src", "./images/small/"+loaiPet+".gif");
        }
        
        $(".pet[idPet='"+idPet+"']").animate({left: left + "px", top:top + "px"}, Math.floor(Math.random() * 3000+7000), ()=>{
            TimViTriVaDiChuyen(idPet);
        });
    }else{
        TimViTriVaDiChuyen(idPet);
    }

    
}

///////////

function loadAllGunsFromPlayer(){
    $.post("./getAllZombiesFromPlayers", {hashString:getCookie("HASH"), randS:getCookie("RAND")}, function(data){
        if(data.result!="1"){
            alert("Wrong authentication!");
        }else{
            data.guns.forEach(function(pet){
                quanlyPet(pet.gun_TokenId, pet.type, pet.currentPoint);
            });
        }
    });
}

updatePoint();

function updatePoint(){
    $.post("./getAllZombiesFromPlayers", {hashString:getCookie("HASH"), randS:getCookie("RAND")}, function(data){
        if(data.result!="1"){
            alert("Wrong authentication!");
        }else{
            //console.log(data);
            data.guns.forEach(function(pet){
                if(pet.currentPoint>=maxToken[pet.type]/100*20){
                    $(".bubblexxx[idPet="+pet.gun_TokenId+"]").css("background-image", `url("/images/fire2.png")`);
                }
                $(".bubblexxx[idPet="+pet.gun_TokenId+"]").html(pet.currentPoint);
            });
        }
    });
    setTimeout(()=>{updatePoint()}, 2000);
}

$("#btnClaimAll").click(function(){
    $.post("./claimAllPoint", {hashString:getCookie("HASH"), randS:getCookie("RAND")}, function(data){
        if(data.result!="1"){
            alert("Wrong authentication!");
        }else{
            updatePointxxx();
            $("#infoAlert").fadeIn(3000, function(){
                setTimeout(()=>{
                    $("#infoAlert").fadeOut(2000);
                }, 3000);
            });
        }
    });
    
});

/////
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