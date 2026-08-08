function showQR(){
  let name=document.getElementById("name").value;
  let id=document.getElementById("ffid").value;

  if(name=="" || id==""){
    alert("Please fill all details!");
  } else {
    document.getElementById("payment").style.display="block";
  }
}

function confirmJoin(){
  alert("🔥 Successfully Joined Tournament!");
}
