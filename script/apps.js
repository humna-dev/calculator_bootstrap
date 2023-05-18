function getNum(Num){
    console.log(Num)
  document.getElementById('result').value += Num;
    }
    function clearscreen(){
      document.getElementById('result').value = "";
    }
    function removeNum(){
      var res = document.getElementById('result').value; 
      document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length - 1)
  }
  
  function getAns(){
    document.getElementById('result').value = 
    eval(document.getElementById('result').value)
  }