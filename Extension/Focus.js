
const generateHTML = (pagename) => {
    return`
    <center><h1 class="error">404</h1></center>
    <hr>
    <div class="main"><h1>Our Systems Have Detected this as a Harmful site</h1></div>
    <br><br>`
};

const generateSTYLING = () => {
    return`
    <style>
    body{
        background: black;
        color:black;
        font-family: "Open Sans",sans-serif;
        max-height:700px;
        overflow: hidden;
    }
    .main{
        font-size: 20px;
        font-color: white;
        padding-left: 300px;
    }
    h1{
      color: white;
    }

    .error{
        font-size: 70px;
        
    }
    </style>
    `
}

// const api_url = "http://localhost:8082/getData"

// const response =  fetch(api_url)
// const data =  response.json()
// const blockUrl = data[0].url





// if(window.location.hostname === blockUrl)
// {
//     document.head.innerHTML = generateSTYLING();
//     document.body.innerHTML = generateHTML("SHAPCHAT")
// }

                                                                            
switch(window.location.hostname){
    case "www.snapchat.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("SHAPCHAT")
        break;

    case "www.facebook.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("FACEBOOK")
        break;

    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("INSTAGRAM")
        break;

    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("NETFLIX")
        break;

    case "www.twitter.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("TWITTER")
        break;

    case "www.reddit.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("REDDIT")
        break;
}

