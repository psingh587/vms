function hideState(){
  console.log("hi");
	var val =document.getElementById("select_country").value;
console.log(val);
if(val==="0")
{
	document.getElementById("select_state").disabled='disabled';
	document.getElementById("select_city").disabled='disabled';

}  
else document.getElementById("select_state").disabled='none;

}

hideState();
