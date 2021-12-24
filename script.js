function clock () {       //clock function
    var hours = document.getElementById("hours");
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");
    var am = document.getElementsByTagName("h2");

    var time =new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();


    hours.innerHTML=a;
    mins.innerHTML=b;
    secs.innerHTML=c;

    
    if (a>12) {
        document.getElementById('am').innerHTML = "PM";
        var hours_12 = time.getHours() - 12;
        hours.innerHTML = hours_12;         
  }

}
setInterval(clock,1000);

    function Makediv() {              //make div
      var container = document.createElement('div');
    
      document.getElementById('set-time').appendChild(container);
      container.id = "dynamic-block";
    
      var invalue1 = document.getElementById('select1');
      var value1 = invalue1.options[invalue1.selectedIndex].text;
      var main1=container.innerHTML = "Wake Up Time" + ": " + value1;
    
    
      var invalue2 = document.getElementById('select2');
      var value2 = invalue2.options[invalue2.selectedIndex].text;
      var main2=container.innerHTML = "\n Lunch Time" + ": " + value2;
    
    
      var invalue3 = document.getElementById('select3');
      var value3 = invalue3.options[invalue3.selectedIndex].text;
      var main3=container.innerHTML = "\n Nap Time" + ": " + value3;
    
    
        var i = document.getElementById('select1').value;
        var j = document.getElementById('select2').value;
        var k = document.getElementById('select3').value;
      if (i==0&&j==0&&k==0) {
        container.innerHTML = "";
      }
      else if (i!=0&&j==0&&k==0) {
        container.innerHTML = main1;
      }
      else if (i==0&&j!=0&&k==0) {
        container.innerHTML = main2;
      }
      else if (i==0&&j==0&&k!=0) {
        container.innerHTML = main3;
      }
      else if (i!=0&&j!=0&&k==0) {
        container.innerHTML = main1+main2;
      }
      else if (i!=0&&j==0&&k!=0) {
        container.innerHTML = main1+main3;
      }
      else if (i==0&&j!=0&&k!=0) {
        container.innerHTML = main2+main3;
      }
      else if (i!=0&&j!=0&&k!=0) {
        container.innerHTML = main1+main2+main3;
      }
    
    }


  function settime() {                   //set tmtime function
    var i = document.getElementById('select1').value;
    var j = document.getElementById('select2').value;
  var k = document.getElementById('select3').value;


  if ((i == 0) && (j == 0) && (k == 0)) {
        document.getElementById('image').style.backgroundImage = "url(./img1.jpeg))";
    document.getElementById('text').innerHTML = "";
    document.getElementById('dynamic-block').remove();

  }
  else if ((i!=0)&&(j==0)&&(k==0)) {
        document.getElementById('image').style.backgroundImage = "url(./wakeup_image.png)";
    document.getElementById('text').innerHTML = "Good Morning";
    Makediv();

    }
    else if (((i!=0)&&(j!=0)&&(k==0))||((i==0)&&(j!=0)&&(k==0))) {
        document.getElementById('image').style.backgroundImage = "url(./lunch_image.png)";
    document.getElementById('text').innerHTML = "Lets Have Lunch";
      Makediv();

    }
   else if (((i!=0)&&(j!=0)&&(k!=0))||((i==0)&&(j==0)&&(k!=0))||((i==0)&&(j!=0)&&(k!=0))||((i!=0)&&(j==0)&&(k!=0))) {
        document.getElementById('image').style.backgroundImage = "url(./goodnight_image.png)";
    document.getElementById('text').innerHTML = "Lets Have Nap Time";
      Makediv();

  }

}
