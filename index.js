 // Add your code here
function submitData(name, email){
    fetch ('http://localhost:3000/users'), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            }, 
        body: JSON.stringify({
            "name": name,
            "email": email,  
        })
        }
        .then(res => res.json())
        .then(body => newData(body.id))
        .catch(error => document.body.innterHTML = error.message)
    }

    function newData(newUser) {
        document.getElementsByTagName("body")[0].innerHTML = newUser
    }

    submitData()