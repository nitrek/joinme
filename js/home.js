$("#currentName").html("Welcome " + localStorage.getItem("currentName"));
$("#currentEmail").html(localStorage.getItem("currentEmail"));
$("#logout").click(function() {
    localStorage.removeItem("currentName");
    localStorage.removeItem("currentEmail");
});
$("#myinterests").click(function() {
    console.log("ds");
    $("#mdl-grid-content").load('interests.html');
});
$("#moveNext").click(function() {
    console.log("ds");
	localStorage.setItem(localStorage.getItem("currentName"),"true");
    window.location.replace('home.html')
});
$("#moveSkipNext").click(function() {
    console.log("ds");
	localStorage.setItem(localStorage.getItem("currentName"),"true");
    window.location.replace('home.html')
});
