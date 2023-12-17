"use strict";

let electrons = 1;
let counter = 0;
let electron = [];
let proton;
let points_per_click = 1;

let purchase = new Audio("enchant.flac");

let prices = {
  Ιοντισμός: "50",
  Θερμοκρασία: "500",
  Ηλεκτρόνιο: "1000"
};

let max_electrons = [0, 2, 10, 28, 50, 100];
let updates = [1, 5, 10];

let proton_offset = window.innerWidth / 2 - 40 / 2;
let electron_offset = window.innerWidth / 2 + 25 / 2;
let orbital1_offset =  12.5 - 410 / 2;

let first_electron = document.getElementsByClassName("electron")[0];
let orbitals = document.getElementsByClassName("orbital");
let buttons = document.getElementsByTagName("button");
let counter_html = document.getElementById("counter");

electron[0] = first_electron;

let orbital2 = orbitals[0].cloneNode();

orbital2.style.width = "200px";
orbital2.style.height = "200px";
orbital2.style.top = "100px";
orbital2.style.left = "96px";
orbital2.style.zIndex = "-1";

orbitals[0].append(orbital2);

proton = document.getElementsByClassName("proton");

orbitals[0].style.left = window.innerWidth / 2 + orbital1_offset + "px";
orbitals[0].style.top = window.innerHeight / 2 + orbital1_offset + "px";

window.addEventListener("resize", (event) => {
  orbitals[0].style.left = window.innerWidth / 2 + orbital1_offset + "px";
  orbitals[0].style.top = window.innerHeight / 2 + orbital1_offset + "px";
})

const boop = [
  {transform: "scale(1.6) rotate(6.28rad)"},
  {transform: "scale(1) rotate(0rad)"},
];

const plus_one = [
  {transform: "translateY(100px)"},
];

const options = {
  duration: 200,
  iterations: 1,
};

function draw_animation(node, progress, initial_y) {
  node.style.top = initial_y - progress * 100 + 'px';
}

function start_animation(node, duration, draw_func, timing_function) {

  let change;

  // Useful as a reference for the animations later
  let starting_x = parseInt(node.style.left, 10);
  let starting_y = parseInt(node.style.top, 10);

  // Getting the seconds that have passed since the website was first loaded
  let start = performance.now();

  // Time is a variable given automatically. It's the optimized time interval that we should use
  requestAnimationFrame(function animate(time) {
    
    let time_fraction = (time - start) / duration;

    if (time_fraction > 1)
    {
      time_fraction = 1;
      cancelAnimationFrame(animate);
      node.remove();
    }
    let progress = timing_function(time_fraction);

    draw_func(node, progress, starting_y);

    if (time_fraction < 1)
      requestAnimationFrame(animate);
  })
}

function plus_one_effect() {
  const node = document.createElement("h3");
  const text_node = document.createTextNode(`+${points_per_click}`);
  
  node.appendChild(text_node);
  
  node.style.position = "absolute";
  let node_x, node_y;

  do {
    node_x = window.innerWidth / 2 - 300/2 + Math.random() * 300;
    node_y = window.innerHeight / 2 + 50 - Math.random() * 100;
  }
  while (node_x > window.innerWidth / 2 - 40 && node_x < window.innerWidth / 2 + 40)

  node.style.top = node_y + "px";
  node.style.left = node_x + "px";
  node.style.color = "white";
  container[0].prepend(node);

  function timing_function(time)
  {
    return time * time;
  }
  
  start_animation(node, 1000, draw_animation, timing_function);
}

let group;

for (let x = 0; x < Object.keys(prices).length; x++)
{

  group =  Object.entries(prices)[x].toString().replace(",", " | ");
  buttons[x].innerText = `${group}`;

  buttons[x].addEventListener( "click", (event) => {
    if ( counter >= prices[Object.keys(prices)[x]] )
    {
      counter -= prices[Object.keys(prices)[x]];
      prices[Object.keys(prices)[x]] = `${parseInt(prices[Object.keys(prices)[x]], 10) + 20 *(x + 1) + 10 * points_per_click}`;

      counter_html.textContent = counter;
      points_per_click += updates[x];
      buttons[x].innerText = `${Object.entries(prices)[x].toString().replace(",", " | ")}`;
      purchase.play();
      
      if (x == 2)
      {
	electron[electrons] = first_electron.cloneNode();
	electron[electrons].textContent = "e";

	orbitals[0].append(electron[electrons]);
	electrons += 1;
      }
	
    }

  })

}

proton[0].style.left = proton_offset;
electron[0].style.left = electron_offset;

let container = document.getElementsByClassName("container");
const counter_element = document.getElementById("counter");

proton[0].addEventListener("click", (event) => {
  
  let bell = new Audio("ding.ogg");
  
  bell.play();
  //bell.stop();

  counter += points_per_click;

  counter_html.textContent = `${counter}`;
  proton[0].animate(boop, options);

  plus_one_effect();
  
})

setInterval(place_electron, 10);
let orbital = 1;
let angular_velocity;
let step;

function place_electron() {
  
  for(let i = 1; i < electrons + 1; i++)
  {
    // Find the orbital of the electron
    for(let k = 0; k < 6; k++)
    {
      if (i == 1 || i == 2)
      {
	break;
      }

      if(i > max_electrons[k] && i <= max_electrons[k + 1])
      {
	orbital = k + 1;
	break;
      }
    }

    angular_velocity = (0.0015 - (orbital / 1800));
    
    step = ((2.0 * Math.PI / (max_electrons[orbital] - max_electrons[orbital - 1])) * (i - max_electrons[orbital - 1] - 1) );

    electron[i - 1].style.transform = "translateY(" + (Math.sin(angular_velocity * Date.now() + step) * (100 * orbital)) + 'px) translateX('+ Math.cos(angular_velocity * Date.now()  + step)  * (100.00 * orbital) + "px)";
    
    orbital = 1;

  }

}

let offset = window.pageYOffset;

document.body.style.background = `rgb(${offset}, 90, 100)`;

document.addEventListener( "scroll", (event) => {

  offset = window.pageYOffset / 20;
  
  document.body.style.background = `rgb(${offset}, 90, 100)`;

})
