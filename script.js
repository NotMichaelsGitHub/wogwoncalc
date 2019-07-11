$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        e.preventDefault();
    });
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        e.preventDefault();
    });
});

//round the stats correctly
function myFunction1() {
    var acc = parseInt(document.getElementById("acctxt").value);
    var ss = parseInt(document.getElementById("sstxt").value);
    var cardstatPace = Math.round((ss*.55)+(acc*.45))
    // window.alert(cardstatPace);
    document.getElementById('lblPace').innerHTML = cardstatPace;
    var fin = parseInt(document.getElementById("fintxt").value);
    var ls = parseInt(document.getElementById("lstxt").value);
    var sp = parseInt(document.getElementById("sptxt").value);
    var pos = parseInt(document.getElementById("postxt").value);
    var pen = parseInt(document.getElementById("pentxt").value);
    var vol = parseInt(document.getElementById("voltxt").value);
    var cardstatShooting = Math.round((fin*0.45)+(ls*0.2)+(sp*0.2)+(pos*0.05)+(pen*0.05)+(vol*0.05));
    //   window.alert(cardstatShooting);
    document.getElementById('lblShooting').innerHTML = cardstatShooting;
    var spass = parseInt(document.getElementById("spasstxt").value);
    var vis= parseInt(document.getElementById("vistxt").value);
    var cros = parseInt(document.getElementById("crostxt").value);
    var lpass = parseInt(document.getElementById("lpasstxt").value);
    var cur = parseInt(document.getElementById("curtxt").value);
    var fka = parseInt(document.getElementById("fkatxt").value);
    var cardstatPassing = Math.round((spass*0.35)+(vis*0.2)+(cros*0.2)+(lpass*0.15)+(cur*0.05)+(fka*0.05));
    //  window.alert(cardstatPassing);
    document.getElementById('lblPassing').innerHTML = cardstatPassing;
    var drib = parseInt(document.getElementById("dribtxt").value);
    var ballc = parseInt(document.getElementById("ballctxt").value);
    var agi= parseInt(document.getElementById("agitxt").value);
    var bal = parseInt(document.getElementById("baltxt").value);
    var cardstatDribbling = Math.round((drib*.5)+(ballc*.35)+(agi*.1)+(bal*.05));
    //  window.alert(cardstatDribbling);
    document.getElementById('lblDribbling').innerHTML = cardstatDribbling;
    var mrk = parseInt(document.getElementById("mrktxt").value);
    var stant = parseInt(document.getElementById("stanttxt").value);
    var inter = parseInt(document.getElementById("intertxt").value);
    var ha = parseInt(document.getElementById("hatxt").value);
    var slidt = parseInt(document.getElementById("slidttxt").value);
    var cardstatDefending = Math.round((mrk*.3)+(stant*.3)+(inter*.2)+(ha*.1)+(slidt*.1));
    //   window.alert(cardstatDefending);
    document.getElementById('lblDefending').innerHTML = cardstatDefending;
    var str = parseInt(document.getElementById("strtxt").value);
    var sta = parseInt(document.getElementById("statxt").value);
    var ag = parseInt(document.getElementById("agtxt").value);
    var jum = parseInt(document.getElementById("jumtxt").value);
    var cardstatPhysical = Math.round((str*0.5)+(sta*0.25)+(ag*0.2)+(jum*0.05));
    //   window.alert(cardstatPhysical);
    document.getElementById('lblPhysical').innerHTML = cardstatPhysical;
}