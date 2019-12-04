//preloading
if(document.images) {
      var fullImg=new Array(3);
      for(var i=0;i<fullImg.length;i++)
      fullImg[i] = new Image(277,373);
      fullImg[0].src="fullsize/jhtp.jpg";
      fullImg[0].alt="Java How to Program";
      fullImg[1].src="fullsize/iw3htp.jpg";
      fullImg[2].src="fullsize/cpphtp.jpg";
      fullImg[3].src="fullsize/jhtplov.jpg";
      fullImg[4].src="fullsize/cpphtplov.jpg";
      fullImg[5].src="fullsize/vcsharphtp.jpg";
     
      }
     
      var inter=null;
      var w;
      var n=1;
     
      window.addEventListener("load",page_load,false);
     
      function page_load() {
      setInterval("display()",3000);
     
      }
      function display() {
      //choose the corresponding full picture to display
      document.getElementById("imgCover").src=fullImg[n].src;
      n++;
      if(n>=6) n=0;
     
      //how to display
      w=0;
      inter=setInterval("expand()", 20);
      }
     
 function expand() {
  w+=3;
  document.getElementById("imgCover").style="width:"+w+"px;height:"+(373/277*w)+"px";  
  if(w>=277)
  clearInterval(inter);  
}
