var members = ['Elias Ngumbi', 'Steve Rogers', 'John Smith', 'Claire Temple', 'Grace Toha', 'James Yhup', 'Isko Morren', 'Natalya Flash'];
 
displayMember();
 
function displayMember(){
	members.sort(function(a,b){
		if(a < b){
			return -1;
		}
 
		if(a > b){
			return 1;
		}
 
		return 0;
	});
 
	data = "";
 
	for(var i=0; i < members.length; i++){
		data += "<tr><td>"+members[i]+"</td></tr>";
	}
 
	document.getElementById('result').innerHTML = data;
}
 
function liveSearch(){
	var search=document.getElementById('search').value.toLowerCase();
	var parent=document.getElementById("result");
	var children=parent.getElementsByTagName('tr');
 
	for(var i=0; i<children.length; i++){
		var keyword=children[i].innerText;
		if(keyword.toLowerCase().indexOf(search)>-1){
			children[i].style.display="";
		}else{
			children[i].style.display = "none";
		}
	}
 
}
