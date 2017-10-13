export const shuffle = array => {
    let clone = array.slice(0);
    for (var i = clone.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
};