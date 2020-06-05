$(document).ready(function () {


    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;


    //selection
    var select = function (el) {
        return document.getElementById(el);
    };
    //variables
    var unsubscribeButton = select("unsubscribe"),
        cancelButton = select("cancel"),
        goBackButton = select("go-back"),
        header = select("my_header"),
        sub1 = select("subtitle1"), 
        sub2 = select("subtitle2"),
        unsubscribeImage = select("envelope");
    //animation
    $("#unsubscribe").mouseenter(function e_shake() { $("#envelope").animate({ marginRight: "-5px" }, 50).animate({ marginRight: "0px" }, 50).animate({ marginRight: "5px" }, 50).animate({ marginRight: "-5px" }, 50).animate({ marginRight: "0px" }, 50).animate({ marginRight: "5px" }, 50).animate({ marginRight: "-5px" }, 50).animate({ marginRight: "0px" }, 50).animate({ marginRight: "5px" }, 50).animate({ marginRight: "-5px" }, 50).animate({ marginRight: "0px" }, 50).animate({ marginRight: "5px" }, 50); });
    //$("#cancel").mouseenter(function e_shake() { $("#envelope").animate({ top: "-5px" }, 50).animate({ top: "0px" }, 50).animate({ top: "5px" }, 50).animate({ top: "-5px" }, 50).animate({ top: "0px" }, 50).animate({ top: "5px" }, 50).animate({ top: "-5px" }, 50).animate({ top: "0px" }, 50).animate({ top: "5px" }, 50).animate({ top: "-5px" }, 50).animate({ top: "0px" }, 50).animate({ top: "5px" }, 50) ;} );
    
   
    //button listeners
    unsubscribeButton.addEventListener("click", unsubscribeFunction);
    cancelButton.addEventListener("click", cancelFunction);
    goBackButton.addEventListener("click", gobackFunction);
    //functions
    function unsubscribeFunction() {
        sub1.innerHTML = "We are sad to see you go.";
        sub2.innerHTML = "You have been unsubscribed and will no longer hear from us.";
        $("#unsubscribe").css("display", "none");
        $("#go-back").css("display", "inline-flex");
        $("#cancel").css("display", "none");

        $("#envelope").attr("src", "img/Crying-Envelope.png");
    }


    function cancelFunction() {
        sub1.innerHTML = "Thanks for staying with us!";
        sub2.innerHTML = "You will continue receiving our weekly newsletter. Yay!";
        $("#unsubscribe").css("display", "none");
        $("#go-back").css("display", "inline-flex");
        $("#cancel").css("display", "none");
        $("#envelope").attr("src", "img/Happy-Envelope.png");



    }
    function gobackFunction() {

        sub1.innerHTML = "Would you like to unsubscribe?";
        sub2.innerHTML = "If you unsubscribe, you will miss out on our newsletters.";
        $("#unsubscribe").css("display", "inline-flex");
        $("#go-back").css("display", "none");
        $("#cancel").css("display", "inline-flex");
        $("#envelope").attr("src", "img/Sad-Envelope.png");
    }


});