(document.querySelector(".buttonLogin") as HTMLInputElement).addEventListener("click", function () {
    window.location.replace("/ui/MainActivity/MainActivity.html")
});

(document.querySelector(".buttonCard") as HTMLInputElement).addEventListener("click", function () {
    (document.querySelector(".CardsGridTwo") as HTMLInputElement).style.display = "none";

    var request = {
        "points": {
            "points": [
                {
                    "x": 1,
                    "y": 2
                },
                {
                    "x": 2,
                    "y": 9
                },
                {
                    "x": 3,
                    "y": 1
                }
            ]
        }
    }

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://lovushka.herokuapp.com/api/v1/graph", true);

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            (document.querySelector("#graph") as HTMLInputElement).src = xhr.responseText
        }
    }

    xhr.send(JSON.stringify(request))
});
