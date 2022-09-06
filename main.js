function arm()
  {
var num=parseInt(document.getElementById("in").value);
var x=document.getElementById('in').value;
    var rev=0;
    var digit=0;
    var remd;
    var dnum1=num;
    var dnum2=num;
    
    if(x=="")
    {
      alert('Please Enter Number');
      document.getElementById('in').focus();
      document.getElementById('d').innerHTML= 'Please Enter Number';
      
      
    }
    
   
    
    

else
{
    while(dnum1>0)
    {
      dnum1=parseInt(dnum1/10);
      digit++;
    }
    while(dnum2>0)
    {
      remd=dnum2%10;
      rev=rev+Math.pow(remd,digit)
      dnum2=parseInt(dnum2/10);
    }

    if (num==rev)
    {
      alert(+num+ " Is A Armstrong umber");
  document.getElementById('d').innerHTML= +num+' Is A Armstrong Number';
    }
    else
    {
      alert(+num+ ' Not A Armstrong Number');
  document.getElementById('d').innerHTML= +num+' Is Not A Armstrong Number';
    }
    }
    }
    
