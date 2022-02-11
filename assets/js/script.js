const form = document.getElementById("form")

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let user = document.getElementById("nombre").value 
    let sinEspacios = user.split(' ').join('')
    alert (sinEspacios)

    fetch(`https://api.github.com/users/${sinEspacios}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })

    fetch (https://api.github.com/users/{user}/repos?page={pagina}&per_page={cantidad_repos}.)

})