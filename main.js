const searchInput = document.querySelector("#search-input");


// Bu blokta; keydown her Enter'a basıldığında function'u  çalıştırır
searchInput.addEventListener("keydown", function(event) {
	if(event.code === "Enter") {
		search();
	}
});
function search() {
	const input = searchInput.value;
	window.location.href = "https://www.google.com/search?q="+input+"&oq="+input+"&aqs=chrome..69i57.1750j0j7&sourceid=chrome&ie=UTF-8"

}