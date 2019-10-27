(document.querySelector(".buttonLogin") as HTMLInputElement).addEventListener("click", function () {
    window.location.replace("/ui/MainActivity/MainActivity.html")
});

(document.querySelector(".buttonCard") as HTMLInputElement).addEventListener("click", function () {
    (document.querySelector(".CardsGridTwo") as HTMLInputElement).style.display = "none";

    var request =  "points={\n" +
        "        \"points\": [\n" +
        "            {\n" +
        "                \"x\": 1,\n" +
        "                \"y\": 2\n" +
        "            },\n" +
        "            {\n" +
        "                \"x\": 2,\n" +
        "                \"y\": 9\n" +
        "            },\n" +
        "            {\n" +
        "                \"x\": 3,\n" +
        "                \"y\": 1\n" +
        "            }\n" +
        "        ]\n" +
        "    }";


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("GET", "http://127.0.0.1/api/v1/graph", true);

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            // alert(xhr.status + ': ' + xhr.statusText);
        } else {
            (document.querySelector("#graph") as HTMLInputElement).src = xhr.responseText
        }
    }

    xhr.send(request)
});
