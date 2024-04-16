// Add your code here
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
  

  let configObj = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });

    function submitData(userName, userEmail) {
   const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
           name:  `${userName}`,
                    email: `${userEmail}`
          }),
      };
   
return fetch('http://localhost:3000/users', config)
.then(resp => resp.json())
.then(handleData)
.catch(handleErr)
}
function handleData(data) {
document.body.innerHTML = data["id"]
}

function handleErr(err) {
document.body.innerHTML += `${err.message}`
}