function toggleCatHand() {
    document.getElementById("cat").classList.toggle("password");
    document.getElementById("hand").classList.toggle("password");
    document.getElementById("hand-r").classList.toggle("password");
    document.getElementById("arms").classList.toggle("password");
    document.getElementById("arm").classList.toggle("password");
    document.getElementById("arm-r").classList.toggle("password");
}

function showPassword() {
    document.getElementById("arm-r").classList.toggle("can-see");
    document.getElementById("hand-r").classList.toggle("can-see");
    document.getElementById("showPassword").classList.toggle("can-see");
    document.getElementById("password-field").focus();

    if (document.getElementById("password-field").type === "password") {
        document.getElementById("password-field").type = "text";
    } else {
        document.getElementById("password-field").type = "password";
    }
}