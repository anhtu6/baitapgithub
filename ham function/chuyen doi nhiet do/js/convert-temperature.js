function convert(valueinside) {
    valueinside = parseFloat(valueinside);
    document.getElementById('celcius').innerHTML = (valueinside-32)/1.8;
}