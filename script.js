
let search=document.getElementById("search");
search.addEventListener("keyup",searchfun);

function searchfun(){

        let table=document.querySelector("#mytable");

        let tr=document.getElementsByTagName("tr");
        let filter=search.value.toLocaleUpperCase();

        for(var i=1;i<tr.length;i++){
                var td=tr[i].getElementsByTagName("td")[0];
                if(td){
                        let textvalue=(td.value||td.innerHTML);
                        let final=textvalue.toLocaleUpperCase();

                        if(final.indexOf(filter)>-1){
                                tr[i].style.display="";
                        }
                        else{
                                tr[i].style.display="none";
                        }
                }

        }
}