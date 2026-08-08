function showQR(){
  let p1=document.getElementById("p1").value;
  let p2=document.getElementById("p2").value;

  if(p1=="" || p2==""){
    alert("Fill all details!");
  } else {
    document.getElementById("payment").style.display="block";
  }
}

function confirmJoin(){
  let p1=document.getElementById("p1").value;
  let p2=document.getElementById("p2").value;

  let msg = encodeURIComponent("Tournament Payment Done\nPlayer1: "+p1+"\nPlayer2: "+p2);
  window.open("https://wa.me/917310015011?text="+msg, "_blank");
}
