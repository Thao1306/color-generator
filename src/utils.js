function componentToHex(c) {
    var hex = c.toString(16)
    return hex.length === 1 ? "0" + hex : hex
}

function rgbToHex(r, b, g) {
    return "#" + componentToHex(r) + componentToHex(b) + componentToHex(g)
}

export default rgbToHex