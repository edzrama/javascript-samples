async function getUsers() {
    let people = await fetch("https://randomuser.me/api/?results=5")
    let data = await people.json();
    console.log(data);
    const timeline = document.querySelector("#timeline");
    data.results.forEach(person => {
        let image = document.createElement("img");
        image.src = person.picture.medium;
        let name = document.createElement("p")
        name.innerHTML = `${person.name.first} ${person.name.last}`
        timeline.appendChild(image);
        timeline.appendChild(name);
        timeline.appendChild(document.createElement("br"));
    })
}

getUsers();