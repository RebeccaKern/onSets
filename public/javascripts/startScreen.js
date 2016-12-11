window.onload = function() {

    console.log("in startscreen.js");

    $(function() { 
        console.log("in this function");
        var i = loaditems();
        $("#nameDisplay").html(i);
        console.log("should be displaying name");
    });

    window.applicationCache.addEventListener("updateready",function(){
        window.applicationCache.swapCache();
        location.reload();
    });

    $("#submitButton").on("click", function(e){
        console.log("submitButton clicked");
        e.preventDefault();
        saveName();
    });

    function saveName() {
        var nameValue = document.getElementById("username").value;
        var divTest = document.getElementById("nameDisplay");
        $("#nameDisplay").html(nameValue);
        saveitems(nameValue);
        var u = "saveUser/" + nameValue;
        $.ajax({
            url: u,
            type: 'POST',
            success: function(result) {
              console.log(result);
              console.log("sent");
            }
        });
    }

    function saveitems(items) {
        localStorage.items = JSON.stringify(items);
    }

    function loaditems() {
        return JSON.parse(localStorage.items || "[]");
    }

}