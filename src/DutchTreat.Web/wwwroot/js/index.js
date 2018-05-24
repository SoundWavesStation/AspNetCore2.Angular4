var x = 0;
var s = "";

console.log("Hello World! Console Log!");



var theForm = $("#theForm");
theForm.hide();

var button = $("#buyButton");
button.on("click", function () {
    console.log("Buying Item");
});

var productInfo = $(".product-props li");
productInfo.on("click", function () {
    console.log("You Clicked on" + $(this).text());
});
