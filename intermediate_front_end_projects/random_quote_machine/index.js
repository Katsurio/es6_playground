// let orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 }
// ];
//
// let amount = orders.reduce(function(total, order) { return total + order.amount;}, 0);
//  console.warn(amount);
//
// let amount = orders.reduce(((total, order) => total + order.amount), 0);


$(document).ready(function () {
    retrieveData();
    $("#shuffle").on("click", function () {
        $(".content-quote").children().remove();
        $(".content-quote-author").text();
        retrieveData();
    });
});


let retrieveData = function () {
    let ts = new Date().getTime();
    let data = {_: ts};
    let url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    $.getJSON(url, data, function(response) {
        $(".content-quote").append(response[0].content);
        $(".content-quote-author").text("-" + response[0].title);
    })
};
