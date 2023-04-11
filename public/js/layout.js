var pricePerZombie = 1000;

$(document).ready(function(){
    $("#infoAlert").fadeOut(0);
});

$('.menu .item').hover(function () {
        var img = $(this).find('img').attr('data-change');
        $(this).find('img').attr('src', img);
    }, function () {
        var img = $(this).find('img').attr('data-default');
        $(this).find('img').attr('src', img);
    }
);

function loadMain(type) 
{
    if (type == 'zombies') {
        loadAllGunsFromPlayer();
        $('.home').removeClass('d-none');
        $('.buybox').addClass('d-none');
    } else if (type == 'buybox') {
        $('.home').addClass('d-none');
        $('.buybox').removeClass('d-none');
    } else if (type == 'logout') {
        window.location="./";
    } else if(type=="playgame"){
        window.location="./play";
    }
}

function loadAllGunsFromPlayer(){
    $.post("./getAllZombiesFromPlayers", {hashString:getCookie("HASH"), randS:getCookie("RAND")}, function(data){
        if(data.result!="1"){
            alert("Wrong authentication!");
        }else{
            $("#petsList").html("");
            data.guns.forEach(function(pet){
                $("#petsList").append(`
                <div class="item">
                    <a href="javascript:void(0)" onclick="loadInfo(`+pet.type+`)">
                        <img src="/images/avatar2/`+pet.type+`.png">
                    </a>
                    <div class="idPet">`+pet.gun_TokenId+`</div>
                </div>
                `);
            });
        }
    });
}

var petName=["Baby Zombie", "Butcher Zombie", "Clown Zombie", "Police Zombie", "Pirate Zombie"];
var petDes=[`<h4>Speed: Very slow</h4><h4>Hobbies: Singing On Night</h4>`,
`<h4>Speed: Very slow</h4><h4>Hobbies: Singing On Night</h4>`,
`<h4>Speed: Very slow</h4><h4>Hobbies: Singing On Night</h4>`,
`<h4>Speed: Very slow</h4><h4>Hobbies: Singing On Night</h4>`,
`<h4>Speed: Very slow</h4><h4>Hobbies: Singing On Night</h4>`];

function loadInfo(idPet) {
    var html = `
        <div class="image">
            <a href="">
                <img src="/images/avatar2/`+idPet+`.png">
            </a>
        </div>
        <h2>`+petName[idPet]+`</h2>`;
    $('#detail_pet').html(html);
}

$('#down').click(function() {
    let val = parseFloat($('#number').val());
    if(val>=2){
        $('#number').val((val - 1));
        countZpt();
    }
});

$('#up').click(function() {
    let val = parseFloat($('#number').val());
    if(val>=10){
        val=0;
    }
    $('#number').val((val + 1));
    countZpt();
});

function countZpt(){
    let val = parseInt($('#number').val());
    var total = val * pricePerZombie;
    $("#totalPrice").html(total);
}

$("#buyZombie").click(function(){
    let val = parseInt($('#number').val());
    BuyGunByFGC(val);
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