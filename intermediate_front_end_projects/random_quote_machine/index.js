$(document).ready(function () {
    retrieveData();
    $("#shuffle").on("click", function () {
        $(".content-quote").children().remove();
        retrieveData();
    });
});


let retrieveData = function () {
    let ts = new Date().getTime();
    let data = {_: ts};
    let url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    $.getJSON(url, data, function(response) {
        let twitt = $(".twitter-share-button");
        let quote = $(".content-quote");
        let author = $(".content-quote-author");
        quote.append(response[0].content);
        author.text("-" + response[0].title);
        let hrefWithQuote = twitt.attr("href") + quote.text();
        $(twitt).attr("href", hrefWithQuote);
    });
};
