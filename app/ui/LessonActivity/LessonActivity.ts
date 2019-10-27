let fragment = 0;

(document.querySelector(".Back") as HTMLInputElement).addEventListener("click", function () {
    if (fragment == 0) {
        window.location.replace("/ui/MainActivity/MainActivity.html")
    } else if (fragment > 0) {
        fragment++
    }
});

(document.querySelector(".Front") as HTMLInputElement).addEventListener("click", function () {
    if (fragment == 1) {
        window.location.replace("/ui/MainActivity/MainActivity.html")
    } else if (fragment > 0) {
        fragment--
    }
});
