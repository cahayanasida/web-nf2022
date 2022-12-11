function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "caha2003" && pass == "19sep03") {
        location.replace("sukses.html");
        alert("Login Berhasil");
    } else {
        alert("Login Gagal");
    }
}