const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector('.google-search-btn');
const luckyBtn = document.querySelector('.lucky-search-btn');

// searchBtn.addEventListener("click", search() );

// Bu blokta; keydown her Enter'a basıldığında function'u  çalıştırır
searchInput.addEventListener("keydown", function(event) {
	if(event.code === "Enter") {
		search();
	}
});



addEventListener("click", function(e) {
    if(e.target.classList.contains("google-search-btn")) {
        document.querySelector("button:nth-child(1)").click();
		search();
    }
});

const search = () => {
	const input = searchInput.value;
	window.location.href = "https://www.google.com/search?q="+input+"&oq="+input+"&aqs=chrome..69i57.1750j0j7&sourceid=chrome&ie=UTF-8"

}

//! -------------------
// Search by voice
function speecRecognition() {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    document.querySelector('.header img').src = "./images/listening.gif";
    recognition.onresult = function(event) {
        let text = event.results[0][0].transcript;
        document.querySelector('#search-input').value = text;
        document.querySelector('button').click();
        document.querySelector('.header img').src = "./images/googlelogo.png";
    };
    recognition.onend = function() {
    document.querySelector('.header img').src = "./images/googlelogo.png";
    }
}
document.querySelector('#mic-icon').addEventListener("click", speecRecognition);


// Feeling lucky button click event

// luckyBtn.addEventListener("click", function() {
// 	let url = 'https://www.google.com/search?q=' + user_input;
// 	let xhr = new XMLHttpRequest();
// 	xhr.open('GET', url, true);
// 	xhr.send();
// 	xhr.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			let html = xhr.responseText;
// 			let results = html.match(/<a href="https(.*?)"/g);
// 			let result = results[2];
// 			let link = result.slice(9, -1);
// 			window.location.href = link;
// 		}
// 	}
// });


// Feeling lucky button click event
document.querySelectorAll('.lucky-search-btn').forEach(button => {
    button.addEventListener("click", function() {
        let url = 'https://www.google.com/search?q=' + user_input;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let html = xhr.responseText;
                let results = html.match(/<a href="https(.*?)"/g);
                let result = results[2];
                let link = result.slice(9, -1);
                window.location.href = link;
            }
        }
    }
)});

// App menu click reveal event
document.querySelector('#menu-icon').addEventListener("click", function () {
    document.querySelector('.apps').style.visibility = "visible";
    document.querySelector('.apps').style.height = "100%";
    document.querySelector('.right-side li:nth-child(3)').setAttribute("aria-expanded", "true");
}); 


// App menu click hide event
document.addEventListener("mouseup", function(e) {
    let box = document.querySelector('.apps');
    if (e.target != box && e.target.parentNode != box) {
    document.querySelector('.apps').style.visibility = "hidden";
    document.querySelector('.apps').style.height = "0px";
    document.querySelector('.right-side li:nth-child(3)').setAttribute("aria-expanded", "false");
}});


// Google Search suggestions fetch function
let getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        let status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
