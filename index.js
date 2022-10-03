
/*

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};
///make code more general
const configurationObject = {
    method: "POST",
    headers: {
        'Content-Type': "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};
fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (res) {
        return res.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert("bad things! Ragnarok!");
        console.log(error.essage);/////catch mistakes in the fetch request
    });
*/




function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            console.log(object);
        })
        .catch(function (error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });
}/////catch mistakes in the fetch request



// console.log(fred, john);


