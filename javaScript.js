// alert(window.innerWidth);
// document.getElementById("window").innerHTML = window.innerWidth;
var ob = {
  lid1: function(){
    // if(screen.width < 780){
        document.getElementById("pr1").addEventListener("click", function(){
          // ob.lidHid("pr1");
          document.getElementById("nav").style.width = "0";
        });
        document.getElementById("pr2").addEventListener("click", function(){
          // ob.lidHid("pr2");
          document.getElementById("nav").style.width = "0";
        });
        document.getElementById("pr3").addEventListener("click", function(){
          // ob.lidHid("pr3");
          document.getElementById("nav").style.width = "0";
        });
        document.getElementById("pr4").addEventListener("click", function(){
          // ob.lidHid("pr4");
          document.getElementById("nav").style.width = "0";
        });
        document.getElementById("menuIco").addEventListener("click", function(){
          // document.getElementById("nav").style.display = "inherit";
          document.getElementById("nav").style.width = "60%";
        });
      // }
  },
  lid1R: function(){
    // if(screen.width > 780){
    // alert("Okk");
    document.getElementById("pr1").removeEventListener("click", ob.lid1());
        // document.getElementById("pr1").removeEventListener("click", function(){});
        // document.getElementById("pr2").removeEventListener("click", function(){});
        // document.getElementById("pr3").removeEventListener("click", function(){});
        // document.getElementById("pr4").removeEventListener("click", function(){});

        document.getElementById("nav").style.width = "100%";

      // }
  },
  lidHid: function(x = ""){
    var ar = ["pr1","pr2","pr3","pr4"];
    for(var i=0;i<ar.length;i++){
      if(x == ar[i]){
        document.getElementById(ar[i]).style.display = "inherit";
      } else {
        document.getElementById(ar[i]).style.display = "none";
      }
    }
  },
  addTxt: function(x = ""){
    document.getElementById("txtB").innerHTML = x;
  },
  heTxt: function(x = "H"){
    switch (x) {
      case "H":
      var txt = "<h1>WAP</h1>"+
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy" +
                "nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud" +
                "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure";
        break;

      case "pr1":
      var txt = "<h1>WAP PR1</h1>"+
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy" +
                "nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud" +
                "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure";
          break;

      case "pr2":
      var txt = "<h1>WAP PR2</h1>"+
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy" +
                "nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud" +
                "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure";
          break;

      case "pr3":
        var txt = "<h1>WAP PR3</h1>"+
                  " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy" +
                  "nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud" +
                  "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure";
          break;
      default:

    }
   return txt;
 },
  sizeSc: function(){
    if(screen.width < 780){
      ob.lid1();
      // document.getElementById("nav").style.display = "none";
      // document.getElementById("menuIco").style.display = "inherit";
      // document.getElementById("nav").style.width = "60%";
    }
    if(screen.width > 780){
      ob.lid1R();
      // document.getElementById("menuIco").style.display = "none";
      // document.getElementById("nav").style.display = "inherit";
    }
  }
}
// ob.lid1();
ob.addTxt(ob.heTxt());
window.onresize = function(){ ob.sizeSc(); }
// window.onload = ob.ale();
