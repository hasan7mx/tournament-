function updatePlayers(){
  let count=document.getElementById("mode").value;
  let div=document.getElementById("players");
  div.innerHTML="";
  for(let i=1;i<=count;i++){
    div.innerHTML+=`<input type="text" placeholder="Player ${i} Name" id="p${i}">`;
  }
}

function showQR(){
  let mode=document.getElementById("mode").value;
  if(mode==""){alert("Select mode"); return;}
  document.getElementById("payment").style.display="block";
}

function confirmJoin(){
  let count=document.getElementById("mode").value;
  let msg="Tournament Payment Done%0A";
  for(let i=1;i<=count;i++){
    let val=document.getElementById("p"+i).value;
    msg+="P"+i+": "+val+"%0A";
  }
  window.open("https://wa.me/917310015011?text="+msg,"_blank");
}
