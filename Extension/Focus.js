
const generateHTML = () => {
    return`
    <center><h1 class="error">404</h1></center>
    <hr>
    <div class="main"><h1>Virtual-Supervisor has detected that this is a harmful website</h1></div>
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

                                                                            
// switch(window.location.hostname){
//     case "www.snapchat.com":
//         document.head.innerHTML = generateSTYLING();
//         document.body.innerHTML = generateHTML("SHAPCHAT")
//         break;

//     case "www.facebook.com":
//         document.head.innerHTML = generateSTYLING();
//         document.body.innerHTML = generateHTML("FACEBOOK")
//         break;

//     case "www.instagram.com":
//         document.head.innerHTML = generateSTYLING();
//         document.body.innerHTML = generateHTML("INSTAGRAM")
//         break;

//     case "www.netflix.com":
//         document.head.innerHTML = generateSTYLING();
//         document.body.innerHTML = generateHTML("NETFLIX")
//         break;

//     case "www.twitter.com":
//         document.head.innerHTML = generateSTYLING();
//         document.body.innerHTML = generateHTML("TWITTER")
//         break;

//     case "www.reddit.com":
//         document.head.innerHTML = generateSTYLING();
//         document.body.innerHTML = generateHTML("REDDIT")
//         break;
// }
const data = fetch("http://localhost:4000/api/Virtual-Supervisor")
  .then((response) => response.json())
  .then((data) => {
    for(let i=0;i<data.length;i++){
        if(window.location.hostname === data[i].url){
            document.head.innerHTML = generateSTYLING()
            document.body.innerHTML = generateHTML()

            fetch('https://api.ipify.org/?format=json').then(results => results.json())
            .then((data) => {
              fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                body: JSON.stringify({
                service_id: 'SERVICE_ID',
                template_id: 'TEMPLATE_ID',
                user_id: 'PUBLIC_KEY',
                template_params: {
                  from_name: 'Virtual-Supervisor',
                  email_id: 'virtualsupervisorminiproject@gmail.com',
                  ip: `ip Address is ${data.ip}`,
                  message: `we have detected ${window.location.hostname} as harmful`
                }}),
                headers: {
                  "Content-Type" : "application/json"
                }
              }).then(function() {
                  alert('Your mail is sent!');
              }).catch(function(error) {
              alert('Oops... ' + JSON.stringify(error));
              });
            })
    
        }
    }
  })
//   .then((data) => console.log(data));


