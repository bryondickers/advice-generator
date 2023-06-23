const btnGet = document.getElementById("fetchAdvice");

btnGet.addEventListener("click",getAdvice);

async function getAdvice(){ 

    var url = "https://api.adviceslip.com/advice";
    const options = {
        method:"GET"
    }

    let response  = await fetch(url,options);
    let fetchedContent = await response.json();
    
    console.log(fetchedContent);
    displayAdvice(fetchedContent.slip);

}

function displayAdvice(cont) {

    let adviceId = document.querySelector(".header-label");
    let advice = document.querySelector(".advice-content");

    if(typeof cont !== "object"){
        advice.textContent = cont;  
    }
    
    adviceId.innerHTML = `ADVICE # ${cont.id}`;
    advice.innerHTML = `${cont.advice}`;
}