let form = document.querySelector('form')
            let eventtitle = document.querySelector('#eventtitle')
            let eventdate = document.querySelector('#eventdate')
            let category = document.querySelector('#eventcategory')
            let eventdescription = document.querySelector('#eventdescription')
            let alleventscontainer = document.querySelector('#all-events-container')
            let clear = document.querySelector('#clear-event-btn')
            let dom=document.querySelector("#dom-container")
            function addEventfunction(event){
            event.preventDefault()
        if(alleventscontainer.innerText.includes("No Events")){
            alleventscontainer.innerHTML = ""
        }
        let card = document.createElement('div')
            card.style.border = "1px solid #ddd"
            card.style.padding = "10px"
            card.style.borderRadius = "10px"
            card.innerHTML = `
                <button class="delete">X</button>
                <h4>${eventtitle.value}</h4>
                <span>${eventdate.value}</span><br>
                <span>${category.value}</span>
                <p>${eventdescription.value}</p>
            `
            card.querySelector(".delete").addEventListener("click",()=>{
                card.remove()
                if(alleventscontainer.children.length === 0){
                    alleventscontainer.innerHTML = "<h4>No Events yet.</h4>"
                }
            })
            alleventscontainer.append(card)
            form.reset()
        }
        function clearallevent(){
            alleventscontainer.innerHTML = `<h4>No Events yet.</h4>`
        }
        form.addEventListener('submit',addEventfunction)
        clear.addEventListener('click',clearallevent)
        let sampleBtn = document.querySelector("#add-sample-btn")
        sampleBtn.addEventListener("click",()=>{
        if(alleventscontainer.innerText.includes("No Events")){
            alleventscontainer.innerHTML = ""
        }
        let samples = [
            {
                title:"Pactice 1",
                date:"2026-02-07",
                category:"Conference",
                desc:"This is a sample card 1"
            },
            {
                title:"Practice 2",
                date:"2026-02-07",
                category:"Workshop",
                desc:"this is a sample card 2"
            }
        ]

    samples.forEach(event=>{

        let card = document.createElement("div")
        card.style.border="1px solid #ddd"
        card.style.padding="10px"
        card.style.borderRadius="10px"

        card.innerHTML=`
            <button class="delete">X</button>
            <h4>${event.title}</h4>
            <span>${event.date}</span><br>
            <span>${event.category}</span>
            <p>${event.desc}</p>
        `

        card.querySelector(".delete").addEventListener("click",()=>{
            card.remove()
        })

        alleventscontainer.append(card)
        })
    })