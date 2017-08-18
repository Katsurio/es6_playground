function titleCase(s){
    let lowSplit = s.toLowerCase().split(' '),
        output = lowSplit.map(function(l) {
            return l.replace(l.charAt(0), l.charAt(0).toUpperCase());
        });
    return output.join(' ');
}

console.log(titleCase("I'm a little tea pot"));