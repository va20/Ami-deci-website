function ajoutSurfaces(cb,s){
  if(cb.checked){
    document.getElementById(s).style.display="inline";
  }
  else{
    document.getElementById(s).style.display="none";
  }
}


function validation() {

if ((document.getElementById('name').value=== "") || (document.getElementById('mail').value=== "")){
    alert("Entrez tous les champs !");
    document.getElementById('name').focus();
    return false;
}
if ( (!/^[a-zA-Z]+\s*\w*$/g.test(document.getElementById('name').value)) || (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(document.getElementById('mail').value))){
    alert("Caractères invalides");
    document.getElementById('name').focus();
    return false;
}

var selection = document.querySelectorAll('input[type=checkbox]:checked');
var ips = document.getElementsByTagName('input');
ipsL = ips.length;


if (selection.length===0) {
      alert('Vous n\'avez rien coché!');
    }

        var total=0;
        var surfaceTotal=0;

        for (var i = 0; i < ipsL; i++) {
          if (ips[i].type === 'checkbox' && ips[i].checked) {

                switch (parseInt(ips[i].value)) {
                    case 1 :
                      var surface=document.getElementById('s1').value;
                      surfaceTotal=surfaceTotal+surface;
                      if(surface.length===0){
                        alert("Indiquez une surface!");
                        document.getElementById('s1').focus();
                      }
                      total=total+surface*22;
                      break;
                    case 2:
                      var surface=document.getElementById('s2').value;
                      surfaceTotal=surfaceTotal+surface;
                      if(surface.length===0){
                        alert("Indiquez une surface!");
                        document.getElementById('s2').focus();
                      }
                      total=total+surface*23;
                     break;
                    case 3:
                      var surface=document.getElementById('s3').value;
                      surfaceTotal=surfaceTotal+surface;
                      if(surface.length===0){
                        alert("Indiquez une surface!");
                      document.getElementById('s3').focus();
                      }
                      total=total+surface*40;
                      break;
                    case 4:
                    var surface=document.getElementById('s4').value;
                    surfaceTotal=surfaceTotal+surface;
                    if(surface.length===0){
                      alert("Indiquez une surface!");
                      document.getElementById('s4').focus();
                    }
                      total=total+surface*22;
                      break;

                    case 5 :
                        var surface=document.getElementById('s5').value;
                        surfaceTotal=surfaceTotal+surface;
                        if(surface.length===0){
                          alert("Indiquez une surface!");
                          document.getElementById('s5').focus();
                        }
                        total=total+surface*22;
                        break;
                    case 6 :
                        var surface=document.getElementById('s6').value;
                        surfaceTotal=surfaceTotal+surface;
                        if(surface.length===0){
                          alert("Indiquez une surface!");
                          document.getElementById('s6').focus();
                        }
                        total=total+surface*23;
                       break;
                    case 7 :
                        var surface=document.getElementById('s7').value;
                        surfaceTotal=surfaceTotal+surface;
                        if(surface.length===0){
                          alert("Indiquez une surface!");
                        document.getElementById('s7').focus();
                        }
                        total=total+surface*40;
                        break;
                    case 8 :
                      var surface=document.getElementById('s8').value;
                      surfaceTotal=surfaceTotal+surface;
                      if(surface.length===0){
                        alert("Indiquez une surface!");
                        document.getElementById('s8').focus();
                      }
                        total=total+surface*8;
                        break;

                    case 9 :
                          var surface=document.getElementById('s9').value;
                          surfaceTotal=surfaceTotal+surface;
                          if(surface.length===0){
                            alert("Indiquez une surface!");
                            document.getElementById('s9').focus();
                          }
                          total=total+surface*27;
                          break;
                    case 10 :
                          var surface=document.getElementById('s10').value;
                          surfaceTotal=surfaceTotal+surface;
                          if(surface.length===0){
                            alert("Indiquez une surface!");
                            document.getElementById('s10').focus();
                          }
                          total=total+surface*10;
                         break;
                    case 11 :
                          var surface=document.getElementById('s11').value;
                          surfaceTotal=surfaceTotal+surface;
                          if(surface.length===0){
                            alert("Indiquez une surface!");
                          document.getElementById('s11').focus();
                          }
                          total=total+surface*40;
                          break;
                    case 12 :
                        var surface=document.getElementById('s12').value;
                        surfaceTotal=surfaceTotal+surface;
                        if(surface.length===0){
                          alert("Indiquez une surface!");
                          document.getElementById('s12').focus();
                        }
                          total=total+surface*30;
                          break;

                    case 13 :
                            var surface=document.getElementById('s13').value;
                            surfaceTotal=surfaceTotal+surface;
                            if(surface.length===0){
                              alert("Indiquez une surface!");
                              document.getElementById('s13').focus();
                            }
                            total=total+surface*22;
                            break;
                    case 14 :
                            var surface=document.getElementById('s14').value;
                            surfaceTotal=surfaceTotal+surface;
                            if(surface.length===0){
                              alert("Indiquez une surface!");
                              document.getElementById('s14').focus();
                            }
                            total=total+surface*23;
                           break;
                    case 15 :
                            var surface=document.getElementById('s15').value;
                            surfaceTotal=surfaceTotal+surface;
                            if(surface.length===0){
                              alert("Indiquez une surface!");
                            document.getElementById('s15').focus();
                            }
                            total=total+surface*40;
                            break;
                    case 16 :
                          var surface=document.getElementById('s16').value;
                          surfaceTotal=surfaceTotal+surface;
                          if(surface.length===0){
                            alert("Indiquez une surface!");
                            document.getElementById('s16').focus();
                          }
                            total=total+surface*22;
                            break;


                   }
                 }
                  total=total+(surfaceTotal* 3);
                  envoiMail(total);

          }



  }




function envoiMail(t) {
var link = document.getElementById('mail').value;
+ "&subject=" +"Devis Personnalisé"
+ "&body=" + " Le montant estimé est de :"+parseInt(t)+". Attention, ce devis est à titre indicatif et ne peut être en aucun cas considéré comme officiel. Pour plus d'informations veuillez contacter AMI DECO "
;

//window.location.href = link;
}
