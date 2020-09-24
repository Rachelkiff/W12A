class BoredActivity {
    content = "";
    getNewActivity(url) {
      let ajax = new XMLHttpRequest();
      let scoped = this;
      ajax.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
             let activityObject = JSON.parse(this.responseText);
             document.getElementById("activity-text").innerHTML= activityObject.activity;
             scoped.content = activityObject.activity;
          }else if (this.readyState != 4) {
              document.getElementById("activity-text").innerHTML= "loading";
          }else {
            document.getElementById("activity-text").innerHTML= "error"; 
          }
      }
      ajax.open("GET",url, true);
      ajax.send(); 
    }
}

document.getElementById("get-activity-button").addEventListener("click", function(){
     let myActivty = new BoredActivity();
     myActivty.getNewActivity("http://www.boredapi.com/api/activity/");
});
document.getElementById("get-rec-activity-button").addEventListener("click", function(){
    let myActivty = new BoredActivity();
    myActivty.getNewActivity("http://www.boredapi.com/api/activity?type=recreational");
});