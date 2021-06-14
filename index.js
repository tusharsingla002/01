
//document.getElementById("head1").style.color = "red";
function headf() {
    var t = new Date().getSeconds()
    if (t % 2 == 1) {
        document.getElementById("head1").style.color = "blue";
    }
    else {
        document.getElementById("head1").style.color = "red";
    }
    var r = setTimeout(headf, 1000)
}