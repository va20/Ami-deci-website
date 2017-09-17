function ajoutSurfaces(cb,s){
  if(cb.checked){
    document.getElementById(s).style.display="inline";
  }
  else{
    document.getElementById(s).style.display="none";
  }
}

function ajoutSurfaces2(cb,s){

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

                      if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                        alert("Indiquez une surface correcte !");
                        document.getElementById('s1').focus();
                      }
                      total=total+surface*22;
                      surfaceTotal=surfaceTotal+surface;
                      break;
                    case 2:
                      var surface=document.getElementById('s2').value;
                      if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                        alert("Indiquez une surface correcte!");
                        document.getElementById('s2').focus();
                      }
                      surfaceTotal=surfaceTotal+surface;
                      total=total+surface*23;
                     break;
                    case 3:
                      var surface=document.getElementById('s3').value;
                      if(surface.length===0  || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                        alert("Indiquez une surface correcte!");
                      document.getElementById('s3').focus();
                      }
                      total=total+surface*40;
                      surfaceTotal=surfaceTotal+surface;
                      break;
                    case 4:
                    var surface=document.getElementById('s4').value;
                    if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                      alert("Indiquez une surface correcte!");
                      document.getElementById('s4').focus();
                    }
                    surfaceTotal=surfaceTotal+surface;
                      total=total+surface*22;
                      break;

                    case 5 :
                        var surface=document.getElementById('s5').value;
                        if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                          alert("Indiquez une surface correcte!");
                          document.getElementById('s5').focus();
                        }
                        total=total+surface*22;
                        surfaceTotal=surfaceTotal+surface;

                        break;
                    case 6 :
                        var surface=document.getElementById('s6').value;
                        if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                          alert("Indiquez une surface correcte!");
                          document.getElementById('s6').focus();
                        }
                        total=total+surface*23;
                        surfaceTotal=surfaceTotal+surface;
                         break;

                    case 7 :
                        var surface=document.getElementById('s7').value;
                        if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                          alert("Indiquez une surface correcte!");
                        document.getElementById('s7').focus();
                        }
                        total=total+surface*40;
                        surfaceTotal=surfaceTotal+surface;
                        break;

                    case 8 :
                      var surface=document.getElementById('s8').value;
                      if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                        alert("Indiquez une surface correcte!");
                        document.getElementById('s8').focus();
                      }
                        total=total+surface*8;
                        surfaceTotal=surfaceTotal+surface;
                        break;

                    case 9 :
                          var surface=document.getElementById('s9').value;
                          if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                            alert("Indiquez une surface correcte!");
                            document.getElementById('s9').focus();
                          }
                          total=total+surface*27;
                          surfaceTotal=surfaceTotal+surface;

                          break;
                    case 10 :
                          var surface=document.getElementById('s10').value;
                          if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                            alert("Indiquez une surface correcte!");
                            document.getElementById('s10').focus();
                          }
                          total=total+surface*10;
                          surfaceTotal=surfaceTotal+surface;

                         break;
                    case 11 :
                          var surface=document.getElementById('s11').value;
                          if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                            alert("Indiquez une surface correcte!");
                          document.getElementById('s11').focus();
                          }
                          total=total+surface*40;
                          surfaceTotal=surfaceTotal+surface;

                          break;
                    case 12 :
                        var surface=document.getElementById('s12').value;
                        if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                          alert("Indiquez une surface correcte!");
                          document.getElementById('s12').focus();
                        }
                          total=total+surface*30;
                          surfaceTotal=surfaceTotal+surface;

                          break;

                    case 13 :
                            var surface=document.getElementById('s13').value;
                            if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                              alert("Indiquez une surface correcte!");
                              document.getElementById('s13').focus();
                            }
                            total=total+surface*22;
                            surfaceTotal=surfaceTotal+surface;

                            break;
                    case 14 :
                            var surface=document.getElementById('s14').value;
                            if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                              alert("Indiquez une surface correcte!");
                              document.getElementById('s14').focus();
                            }
                            total=total+surface*23;
                            surfaceTotal=surfaceTotal+surface;

                           break;
                    case 15 :
                            var surface=document.getElementById('s15').value;
                            if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                              alert("Indiquez une surface correcte!");
                            document.getElementById('s15').focus();
                            }
                            total=total+surface*40;
                            surfaceTotal=surfaceTotal+surface;

                            break;
                    case 16 :
                          var surface=document.getElementById('s16').value;
                          if(surface.length===0 || (!/^[+-]?\d+(\.\d+)?$/g.test(surface))){
                            alert("Indiquez une surface correcte!");
                            document.getElementById('s16').focus();
                          }
                            total=total+surface*22;
                            surfaceTotal=surfaceTotal+surface;

                            break;


                   }
                 }
                  total=total+(surfaceTotal* 3);

          }
    $(document).ready(function () {

        $('#submit').click(function () {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: total,
                cache: false,
                contentType: false,
                processData: false,
                success:  function(data){
                    alert("Un email vient d'etre envoyé à votre adresse avec les details.");
                    //window.location.reload(true);
                }
            });
        });
    });
  }






//window.location.href = link;
  //alert("Mail envoyé");
