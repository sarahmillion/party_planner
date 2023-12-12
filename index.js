let events = [];
const spanCount = document.querySelector('.count');
const eventsList = document.querySelector('ul');

function render(){
    spanCount.innerHTML = events.length
    const html = events.map(function(event){
        return`
        <li>
        <h3>${event.name}</h3>
        <h4>${event.date}</h4>
        <h4>${event.time}</h4>
        <h5>${event.location}</h5>
        <h5>${event.description}</h5>
        </li>
        `;
    }).join('');
    eventsList.innerHTML = html;
    
}

render();

async function fetchEvents(){
 try{
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events');
    const json =  await response.json();
    events = json.data;
    render();

}
 catch(ex){
}
}

fetchEvents();