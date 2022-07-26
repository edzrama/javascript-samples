function urlify(title) {
    const punctuation = /[.,/#!$%^&*;:{}=!\-_`~'"]/g;
    const titleWithoutPunctuation = title.replace(punctuation, "");
    return titleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
    
}

console.log(urlify("How to build your online portfolio in just 10 days!"));