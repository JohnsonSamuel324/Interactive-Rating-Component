let currentID = null;
function selectRating(id) {
    if (currentID !== null) {
        document.getElementById(currentID).style.backgroundColor = "#262e38";
        document.getElementById(currentID).style.color = "#88909d";
    }
    document.getElementById(id).style.backgroundColor = "#fc7613";
    document.getElementById(id).style.color = "white";
    currentID = id;
}

function submitRating(id) {
    // Checks if a rating has been set
    // If not then will not allow user to submit
    if (currentID !== null) {
        document.getElementById(id).style.backgroundColor = "#ffffff";
        document.getElementById(id).style.color = "#fc7613";
        setTimeout(function() {
            document
              .getElementsByClassName("rating-form")[0]
              .classList.add("hidden");
            document
              .getElementsByClassName("thanks-container")[0]
              .classList.remove("hidden");
            document.getElementById("rating-summary").innerHTML =
              `You selected ${document.getElementById(currentID).innerHTML} out of 5`;
        }, 1000)
    }
} 