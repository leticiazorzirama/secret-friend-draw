// Array to store friends' names
let friends = [];

// Function to add a friend's name to the list
function addFriend() {
    // Get the value typed in the input field
    const friendName = document.getElementById("amigo").value.trim();
    
    // Check if the field is empty
    if (friendName === "") {
        alert("Please enter a valid name!");
        return;
    }

    // Add the name to the list
    friends.push(friendName);

    // Clear the input field
    document.getElementById("amigo").value = "";

    // Update the visible list of friends
    updateFriendsList();
}

// Function to update the list of friends on the screen
function updateFriendsList() {
    // Get the list element where the friends will appear
    const friendsList = document.getElementById("listaAmigos");

    // Clear the list before updating
    friendsList.innerHTML = "";

    // For each name in the friends array, create a list item
    friends.forEach((friend) => {
        const li = document.createElement("li");
        li.textContent = friend;
        friendsList.appendChild(li);
    });
}

// Function to draw a secret friend
function drawFriend() {
    // Check if the list is empty
    if (friends.length === 0) {
        alert("Add at least one friend to draw!");
        return;
    }

    // Draw a random number based on the list length
    const randomIndex = Math.floor(Math.random() * friends.length);

    // Get the drawn name
    const drawnFriend = friends[randomIndex];

    // Show the drawn name
    showResult(drawnFriend);
}

// Function to display the drawn name on the screen
function showResult(drawnFriend) {
    const result = document.getElementById("resultado");

    // Clear the previous result
    result.innerHTML = "";

    // Create a new list item with the result
    const li = document.createElement("li");
    li.textContent = `The secret friend is: ${drawnFriend}`;
    
    // Add the item to the results list
    result.appendChild(li);
}
