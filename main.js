function play() {
    document.getElementById('file-1').style.transition = "visibility"
    document.getElementById('file-1').style.visibility = "hidden"
    document.getElementById('file-2').style.transition = "visibility"
    document.getElementById('file-2').style.visibility = "hidden"
    document.getElementById('file-3').style.transition = "visibility"
    document.getElementById('file-3').style.visibility = "hidden"
    document.getElementById('txt').style.visibility = "hidden"
    document.getElementById('import').style.visibility = "hidden"
    document.body.style.backgroundColor = "white"
    document.getElementById('sketch').style.visibility = "visible"
    start();
}

