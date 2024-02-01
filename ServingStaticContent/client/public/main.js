(function(){
  
  async function hitServer() {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);
  }
  hitServer();
})();