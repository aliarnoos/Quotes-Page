const pName = document.querySelector('#name')
const position = document.querySelector('#position')
const quote = document.querySelector('#quote')
const random = document.querySelector('#random')
const next = document.querySelector('#next')
const last = document.querySelector('#last')
let person = document.querySelector('#person')

next.textContent="<"
last.textContent=">"
let i = 0
let lastNum=null;

let person0 = {
    name:'Anna Johnson',
    position:'WEB DESIGNER',
    quote:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
}

let person1 = {
    name:'Peter Jones',
    position:'INTERN',
    quote:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
}
let person2 = {
    name:'Bill Anderson',
    position:'CEO',
    quote:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
}
let person3 = {
    name:'Susan Smith',
    position:'WEB DESIGNER',
    quote:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
}

let people = [person0, person1, person2, person3];


random.addEventListener('click',  function random() {
    randomNum ()
    if (i===0) {
        pName.textContent=person0.name
        position.textContent=person0.position
        quote.textContent=person0.quote
        person.src= 'images/image3.jpg'
    }
    if (i===1) {
        pName.textContent=person1.name
        position.textContent=person1.position
        quote.textContent=person1.quote
        person.src= 'images/image4.jpg'
    }    if (i===2) {
        pName.textContent=person2.name
        position.textContent=person2.position
        quote.textContent=person2.quote
        person.src= 'images/image1.jpg'

    }    if (i===3) {
        pName.textContent=person3.name
        position.textContent=person3.position
        quote.textContent=person3.quote
        person.src= 'images/image2.jpg'

    }


})

function randomNum () {
     
     i = Math.floor(Math.random() * people.length);
     if (i==lastNum) {
        randomNum()
     }
}

next.addEventListener('click', function next () {
    if (i===0) {
        pName.textContent=person0.name
        position.textContent=person0.position
        quote.textContent=person0.quote
        i= i +1
        person.src= 'images/image3.jpg'
    }
    else if (i===1) {
        pName.textContent=person1.name
        position.textContent=person1.position
        quote.textContent=person1.quote
        i= i +1
        person.src= 'images/image4.jpg'

    }    
    else if (i===2) {
        pName.textContent=person2.name
        position.textContent=person2.position
        quote.textContent=person2.quote
        i= i +1
        person.src= 'images/image1.jpg'


    }    
    else if (i===3) {
        pName.textContent=person3.name
        position.textContent=person3.position
        quote.textContent=person3.quote
        i= 0
        person.src= 'images/image2.jpg'

    }
})

last.addEventListener('click', function last () {
    i = i -1 
    if (i<0) {
        i = 3
    }
    
    if (i===0) {
        pName.textContent=person0.name
        position.textContent=person0.position
        quote.textContent=person0.quote
        person.src= 'images/image3.jpg'

    }
    else if (i===1) {
        pName.textContent=person1.name
        position.textContent=person1.position
        quote.textContent=person1.quote
        person.src= 'images/image4.jpg'


    }    
    else if (i===2) {
        pName.textContent=person2.name
        position.textContent=person2.position
        quote.textContent=person2.quote
        person.src= 'images/image1.jpg'


    }    
    else if (i===3) {
        pName.textContent=person3.name
        position.textContent=person3.position
        quote.textContent=person3.quote
        person.src= 'images/image2.jpg'

    }

})
