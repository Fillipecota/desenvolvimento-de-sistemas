async function loadProfile() {
    const usename = document.getElementById("username").value;
    if (!usename) {
        alert("VOCÊ PRECISA DIGITAR UM USUÁRIO!!!");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${usename}`)
    const user = await response.json();



    const profileElement = document.createElement("div");
    profilesElement.classList.add("prodile-item")
    profileElement.innerHTML = `
    <img src= ${user.avatar_url}
    `

    const Profile = document.getElementById("profiles");
}