/**
 * Created by gagsingh on 12/16/2015.
 */

$(document).ready(function () {
    $("#showFew").click(function () {
        $("#location").hide(2000);
        $("#function").hide(2000);
        $("#locLabel").hide(2000);
        $("#functionLabel").hide(2000);

    });
    $("#showAll").click(function () {
        $("*").show();
    });

    $("#toggle").click(function () {
        $("#location").toggle();
        $("#function").toggle();
        $("#locLabel").toggle();
        $("#functionLabel").toggle();
    });
    $("input").mouseenter(function () {
        $(this).val("Remove Cursor please, it hurts!")
    });

    $("input").mouseleave(function () {
        $(this).val("")
    });
    $("#showFew").mouseenter(function () {
        $(this).removeClass("btn btn-primary")
        $(this).addClass("btn btn-info")
    });
    $("#showFew").mouseleave(function () {
        $(this).removeClass("btn btn-info")
        $(this).addClass("btn btn-primary")
    });

    //Append method inserts text after the selected element
    $("#appendText").click( function() {
            $("#resultPanel").append("Added text");
        });

    //Prepend method inserts text before the selected element
    $("#prependText").click( function() {
        $("#resultPanel").prepend("Added text");
    });

    //After method inserts a dom element after the selected element
    $("#addElementAfter").click( function() {
        var button = document.createElement("button");
        button.innerHTML = "AddedBtn";
        button.setAttribute("id", "addedButton1");
        $("#resultPanel").after(button);
    });

    //Before method inserts a dom element before the selected element
    $("#addElementBefore").click( function() {
        var button = document.createElement("button");
        button.setAttribute("id", "addedButton2");
        button.innerHTML = "AddedBtn";
        $("#resultPanel").before(button);
    });

    //Remove method removes a dom element
    $("#remove").click( function() {
        $("#addedButton1").remove();
        $("#addedButton2").remove();
    });

});

//parent method returns direct parent element of selected element
function getParent() {
    console.log("Direct parent of form : "+$("form").parent().length);
    console.log("All parents of form : "+$("form").parents().length);
    console.log("Elements between button row and form : "+$("form").parentsUntil("#resultPanel").length);

}

