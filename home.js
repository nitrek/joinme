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
// <
// form action = "#" >
//
//
//     <
//     label class = "mdl-textfield__label"
// for = "sample3" > Text... < /label> <
//     /div> <
// //     /form>
// html("<form action='#'><div class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
//     "<input placeholder='enter interests'class='mdl-textfield__input' type='text' id='sample3'><button type='submit'>" +
//     "<button type=\"button\" class=\"button buttonBlue\" id=\"submitInterests\">Login" +
//     "<div class='ripples buttonRipples'><span class=\"ripplesCircle\"></span></div>" +
//     "</button>)</form>  ")
