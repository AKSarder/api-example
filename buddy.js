const loadBuddies = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

loadBuddies();
const displayBuddies = (data) => {
    // console.log(data);
    const buddies = data.results;
    console.log(buddies);

    for (const buddy of buddies) {
        const buddiesContainer = document.getElementById("buddies");
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} cell: ${buddy.cell} registered : ${buddy.registered.age}`;
        buddiesContainer.appendChild(p);
    }

}

