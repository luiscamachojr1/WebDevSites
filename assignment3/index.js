var banners = ["images/banner1.gif","images/banner2.gif","images/banner3.gif","images/banner4.gif" ]
var i=0;
var renew= setInterval(function(){
    document.getElementById("banner").src = banners[i];
    i++;
    if( i ==4)
        i=0;
},3000);

function display(s){
    document.getElementById("mainimg").src="images/"+s+ ".jpg";
    if(s !="placerholder"){
        document.getElementById("msg").innerHTML=s;
    }
    if(s == "placeholder")
        document.getElementById("msg").innerHTML="Move your mouse over one of the icons to see an enlarged image";
       
}