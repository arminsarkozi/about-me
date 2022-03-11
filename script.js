// megijesztő
function pass() {
    let password = "codeberry-and-bunny123";
    let check = prompt("Password", "");
    if (check != password) {
        setTimeout(100);
        window.location = "https://example.com/good-password/";
    }
}

pass();