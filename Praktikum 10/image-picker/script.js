function imgPicker() {
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "anggrek") {
        images.src = "image/anggrek_hutan.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar anggrek_hutan.jpg";
        alert("ini adalah gambar anggrek_hutan.jpg");
    } else if (picker == "aster") {
        images.src = "image/bunga_aster.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar bunga_aster.jpg";
        alert("ini adalah gambar bunga_aster.jpg");
    } else if (picker == "lavender") {
        images.src = "image/bunga_lavender.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar bunga_lavender.jpg";
        alert("ini adalah gambar bunga_lavender.jpg");
    } else if (picker == "matahari") {
        images.src = "image/bunga_matahari.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar bunga_matahari.jpg";
        alert("ini adalah gambar bunga_matahari.jpg");
    } else if (picker == "mawar") {
        images.src = "image/bunga_mawar.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar bunga_mawar.jpg";
        alert("ini adalah gambar bunga_mawar.jpg");
    } else if (picker == "melati") {
        images.src = "image/bunga_melati.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar bunga_melati.jpg";
        alert("ini adalah gambar bunga_melati.jpg");
    } else if (picker == "sakura") {
        images.src = "image/bunga_sakura.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar bunga_sakura.jpg";
        alert("ini adalah gambar bunga_sakura.jpg");
    } else if (picker == "tulip") {
        images.src = "image/bunga_tulip.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar bunga_tulip.jpg";
        alert("ini adalah gambar bunga_tulip.tulip.jpg");
    } else {
        alert ("Gagal");
    }
}