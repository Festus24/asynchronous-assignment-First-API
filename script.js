const fetchInfo = async () =>{
    const URL = "https://api.github.com/users"
    const fetchData = await fetch(URL)
    const convertData = await fetchData.json()    
    console.log(convertData);

    for (let index = 0; index < convertData.length; index++) {
        const element = convertData[index];
        display.innerHTML += `<p>${element.id}. ${element.login} <br> ${element.node_id} <br> <img src=${element.avatar_url}> <br> ${element.gravatar_id} <br> ${element.url} <br> ${element.html_url} <br> ${element.followers_url} <br> ${element.following_url} <br> ${element.gists_url} <br> ${element.starred_url} <br> ${element.subscriptions_url} <br> ${element.organizations_url} <br> ${element.repos_url} <br> ${element.events_url} <br> ${element.received_events_url} <br> ${element.type} <br> ${element.user_view_type} <br> ${element.site_admin}</p> `
    }
}

// convertedData.map((element) => {
    //     display.innerHTML += `<p>${element.id}. ${element.address.city}</p>`
    //     // `<img style="" src=${element.image_url}/>`
    // })