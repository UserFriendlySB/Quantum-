let Target = "June 1 2025 00:00:00"; // Set your target date here
let Birthdate = "June 1 2007 10:35:00"; // Set your birthdate here
let timecon = document.getElementById("timercon");

//body 
let body = document.querySelector("body");
let style01 = document.getElementById("style");
//container
let container = document.getElementById("container");
let afterContainer = document.getElementById("afterContainer");
let Maincontainer = document.getElementById("Maincontainer");
let slider = document.getElementById("slider");
let imagidiv = document.getElementById("imagidiv");
//lights
let lights = document.getElementById("lights");
let audio = document.getElementById("HBD");
let audio1 = document.getElementById("fireworksound");   
// Buttons
let lightoff = document.getElementById("Lightoff");
let lighton = document.getElementById("Lighton");
let ready = document.getElementById("ready");
let fireworks = document.getElementById("fireworks");
let seenowdetails = document.getElementById("seenowdetails");

//Cards
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

//Sound 
let sound1 = document.getElementById("sound1");
let sound2 = document.getElementById("sound2");
let sound3 = document.getElementById("HBD2");

let target = document.getElementById("target");
let birthdaycome = document.getElementById("birthdaycome");
target.innerHTML = "at " +  Target;
//Functions
function irasecard(card) {
    card.style.animation = "fadeOut 1s forwards";
    setTimeout(() => {
        card.style.display = "none";
    }, 1000);
}

function showcard(card) {
    card.style.animation = "fadeIn 1s forwards";
    setTimeout(() => {
        card.style.display = "block";
    }, 1000);
}

//Acces functions
function btn1p(){
    irasecard(card1);
    showcard(card2);
}
function btn2p(){
    irasecard(card1);
    showcard(card2);
}
function btn3p(){
    irasecard(card2);
    showcard(card3);
}
function btn4p(){
    irasecard(card2);
    showcard(card4);
}
function btn5p(){
    irasecard(card3);
    showcard(card7);
}
function btn6p(){
    irasecard(card3);
    showcard(card5);
}
function btn7p(){
    irasecard(card4);
    showcard(card3);
}
function btn8p(){
    irasecard(card4);
    showcard(card6);
}
function btn9p(){
    irasecard(card5);
    showcard(card7);
}
function btn10p(){
    irasecard(card5);
    showcard(card1);
}
function btn11p(){
    irasecard(card6);
    showcard(card3);
}
function btn12p(){
    irasecard(card6);
    showcard(card4);
}
function playC(){
    sound1.style.animation = "shape 0.5s ease-in-out infinite alternate"
    sound2.style.animation = "shape 0.5s ease-in-out infinite alternate"
    sound1.style.transform = "scale(1.2)";
    sound2.style.transform = "scale(1.2)";
    playvtn.style.animation = "fadeOut 2s ease-in-out ";
    audio.play();
    setTimeout(() => {
        playvtn.style.display = "none";
    }, 2000);
    setTimeout(() => {
        lightoff.style.display = "block";
        lightoff.style.animation = "button 2s ease-in-out ";
    }, 30000);
}

function Lightoff(){
    card7.style.display = "none";
    body.style.background = "black";
    setTimeout(() => {
        ready.style.display = "block";
    }, 2000);
}

function fire(){
    ready.style.animation = "fadeOut 2s ease-in-out";
    setTimeout(() => {
        ready.style.display = "none";
        fireworks.style.display = "block";
        canvas.style.display = "block";
        audio1.play();
        startfireworks();
    }, 2000);
}

function fireover(){
    canvas.style.display = "none";
    fireworks.style.display = "none";
    lighton.style.display = "block";
    audio1.pause();
    audio1.currentTime = 0;
    
}

function Lighton(){
    container.style.display = "none";
    lights.style.display = "flex";
    lighton.style.animation = "fadeOut 2s ease-in-out ";
    body.style.alignItems = "flex-start";
    afterContainer.style.display = "flex";
    audio.pause();
    audio.currentTime = 0;
    setTimeout(() => {
        lighton.style.display = "none";
        timecon.style.display = "flex";
    },2000);
}
let valueCounter = 0;

slider.oninput = function () {
    const value = parseInt(this.value);

    if (value === 100) {
        lights.style.display = "none";

        // Reset animation
        body.style.animation = "none";
        void body.offsetWidth;
        body.style.animation = "bgcolor 4s ease-in-out";

        setTimeout(() => {
            body.style.background = "pink";

            if (valueCounter === 2) {
                afterContainer.style.animation = "fadeOut 2s ease-in-out";
                afterContainer.style.display = "none";
                setTimeout(() => {
                    Maincontainer.style.display = "flex";
                    sound3.play();
                    sound3.loop = true;
                }, 2000);
            }
        }, 2000);

        if (valueCounter !== 2) {
            valueCounter = 1;
        }

    } else if (value === 1 && valueCounter === 1) {
        // Reset animation
        body.style.animation = "none";
        void body.offsetWidth;
        body.style.animation = "bgcolor 4s ease-in-out reverse";

        setTimeout(() => {
            body.style.background = "black";
        }, 2000);

        lights.style.display = "flex";
        valueCounter = 2;
    }
}
function ghibliMode(elem){
    if (elem.value === "on") {
        document.querySelectorAll('.img').forEach(img => {
            const oldSrc = img.getAttribute('src');
            const newSrc = oldSrc.replace('./media/', './media/Ghibli/');
            img.setAttribute('src', newSrc);
        });
    } else if (elem.value === "off") {
        document.querySelectorAll('.img').forEach(img => {
            const oldSrc = img.getAttribute('src');
            const newSrc = oldSrc.replace('./media/Ghibli/', './media/');
            img.setAttribute('src', newSrc);
        });
    }
}

  let originalRect = null;

  function bigshow(src, id) {
    const clickedImg = document.getElementById(id);
    const popupImage = document.getElementById("popup-image");
    const overlay = document.getElementById("overlay");

    // Store original rect
    originalRect = clickedImg.getBoundingClientRect();

    popupImage.src = src;
    popupImage.style.position = "fixed";
    popupImage.style.top = originalRect.top + "px";
    popupImage.style.left = originalRect.left + "px";
    popupImage.style.width = originalRect.width + "px";
    popupImage.style.height = originalRect.height + "px";
    popupImage.style.transform = "none";
    popupImage.style.transition = "all 0.5s ease-in-out";
    popupImage.style.objectFit = "contain";

    overlay.style.display = "flex";
    document.body.classList.add("blurred");

    // Trigger animation
    requestAnimationFrame(() => {
      popupImage.style.top = "50%";
      popupImage.style.left = "50%";
      popupImage.style.width = "min(90vw, 600px)";
      popupImage.style.height = "auto";
      popupImage.style.transform = "translate(-50%, -50%) scale(1)";
    });
  }

  function closePopup(event) {
    if (event) event.stopPropagation();

    const popupImage = document.getElementById("popup-image");
    const overlay = document.getElementById("overlay");

    // Animate back to original position
    popupImage.style.transition = "all 0.5s ease-in-out";
    popupImage.style.transform = "none";
    popupImage.style.top = originalRect.top + "px";
    popupImage.style.left = originalRect.left + "px";
    popupImage.style.width = originalRect.width + "px";
    popupImage.style.height = originalRect.height + "px";

    // Wait for animation to finish before hiding
    setTimeout(() => {
      overlay.style.display = "none";
      popupImage.removeAttribute("style");
      document.body.classList.remove("blurred");
    }, 500);
  }

function seenow(element) {
    if (element.getAttribute("value") === "off") {
        imagidiv.style.display = "flex";
        imagidiv.style.animation = "fadeIn 1s ease-in-out";
        element.setAttribute("value", "on");
    } else {
        imagidiv.style.animation = "fadeOut 2s ease-in-out";
        setTimeout(() => {
            imagidiv.style.display = "none";
        }, 2000); // Wait for the animation to complete
        element.setAttribute("value", "off");
    }
}
//Timer 
const Days = document.getElementById('Days');
const Hours = document.getElementById('Hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');
const Years1 = document.getElementById('Years1');
const Months1 = document.getElementById('Months1');
const Days1 = document.getElementById('Days1');
const Hours1 = document.getElementById('Hours1');
const Minutes1 = document.getElementById('Minutes1');
const Seconds1 = document.getElementById('Seconds1');
const timer0 = document.getElementById('timer0');
const sounddiv = document.querySelector('.sounddiv');
const playvtn = document.getElementById('play');
let count = 0
const targetDate = new Date(Target).getTime();
const birthday = new Date(Birthdate).getTime();
console.log(targetDate);
console.log(birthday);

function timer () {
    const currentDate = new Date().getTime();
    let distance = targetDate - currentDate;

    if (distance < 0) {
        distance = 0; // Prevent negative values
    }

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days.toString().padStart(2, '0');
    Hours.innerHTML = hours.toString().padStart(2, '0');
    Minutes.innerHTML = minutes.toString().padStart(2, '0');
    Seconds.innerHTML = seconds.toString().padStart(2, '0');
    

    if (distance === 0) {
        if (count === 0) {
                timer0.style.display = "block";
                sounddiv.style.display = "flex";
                birthdaycome.innerHTML = "Look like Birthday is here. <br> Happy Birthday ❤️!";
                setTimeout(() => {
                    playvtn.style.display = "block";
                    playvtn.style.animation = "button 2s ease-in-out ";
                }, 2000);
                count++;
            }
    }

    // Update the age display to reflect the time from the birthday to the current date
    const birthdate = new Date(Birthdate);

  const Years1 = document.getElementById("Years1");
  const Months1 = document.getElementById("Months1");
  const Days1 = document.getElementById("Days1");
  const Hours1 = document.getElementById("Hours1");
  const Minutes1 = document.getElementById("Minutes1");
  const Seconds1 = document.getElementById("Seconds1");

  function updateAge() {
    const now = new Date();

    let yearsB = now.getFullYear() - birthdate.getFullYear();
    let monthsB = now.getMonth() - birthdate.getMonth();
    let daysB = now.getDate() - birthdate.getDate();
    let hoursB = now.getHours() - birthdate.getHours();
    let minutesB = now.getMinutes() - birthdate.getMinutes();
    let secondsB = now.getSeconds() - birthdate.getSeconds();

    if (secondsB < 0) {
      secondsB += 60;
      minutesB--;
    }
    if (minutesB < 0) {
      minutesB += 60;
      hoursB--;
    }
    if (hoursB < 0) {
      hoursB += 24;
      daysB--;
    }
    if (daysB < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      daysB += prevMonth;
      monthsB--;
    }
    if (monthsB < 0) {
      monthsB += 12;
      yearsB--;
    }

    if (Years1) Years1.textContent = yearsB.toString().padStart(2, '0');
    if (Months1) Months1.textContent = monthsB.toString().padStart(2, '0');
    if (Days1) Days1.textContent = daysB.toString().padStart(2, '0');
    if (Hours1) Hours1.textContent = hoursB.toString().padStart(2, '0');
    if (Minutes1) Minutes1.textContent = minutesB.toString().padStart(2, '0');
    if (Seconds1) Seconds1.textContent = secondsB.toString().padStart(2, '0');
  }

  setInterval(updateAge, 1000);
  updateAge();
}

setInterval(timer, 1000);

// Fire Works
function startfireworks() {
    window.oncontextmenu = function () { return false; } // Block menu

    var canvas = document.getElementById('canvas'); // Get element by ID canvas
    var ctx = canvas.getContext('2d'); // Get context of canvas 2d graphics
    var frameRate = 60.0; // Frame rate per second use in loop
    var frameDelay = 1000.0 / frameRate; // Frame Delay per second like latency

    var clientWidth = innerWidth; // Clients Width of web screen
    var clientHeight = innerHeight; // Clients height of web screen
    var timer = 0; // Timer is ticker, how many ticks per round
    var x = 0; // Mouse x coordinates
    var y = 0; // Mouse y coordinates

    canvas.width = clientWidth; // Set canvas width to user width
    canvas.height = clientHeight; // Set canvas height to user height

    var TimedFirework = 1000; // Repeat Firework every x MS
    var LimiterTicker = 0;
    var fireworks = []; // Array with starting fireworks
    var particles = []; // Array with particles
    var typecount = 1; // Variable to change firework type
    var sparks = []; // Array for sparkles drops
    var num = 1; // number of color
    var colorchanger = 0; // colorchange timer

    // Function to calculate distance = Simple Pythagorean theorem
    function distance(px1, py1, px2, py2) {
        xdis = px1 - px2;
        ydis = py1 - py2;
        return Math.sqrt((xdis * xdis) + (ydis * ydis));
    }

    // My own created function to get angle from point to point
    function getAngle(posx1, posy1, posx2, posy2) {
        if (posx1 == posx2) { if (posy1 > posy2) { return 90; } else { return 270; } }
        if (posy1 == posy2) { if (posy1 > posy2) { return 0; } else { return 180; } }

        var xDist = posx1 - posx2;
        var yDist = posy1 - posy2;

        if (xDist == yDist) { if (posx1 < posx2) { return 225; } else { return 45; } }
        if (-xDist == yDist) { if (posx1 < posx2) { return 135; } else { return 315; } }

        if (posx1 < posx2) {
            return Math.atan2(posy2 - posy1, posx2 - posx1) * (180 / Math.PI) + 180;
        } else {
            return Math.atan2(posy2 - posy1, posx2 - posx1) * (180 / Math.PI) + 180;
        }
    }

    // My function to create random number
    function random(min, max, round) {
        if (round == 'round') {
            return Math.round(Math.random() * (max - min) + min);
        } else {
            return Math.random() * (max - min) + min;
        }
    }

    // Function to choose one of these best colors
    function colors() {
        if (timer > colorchanger) { num = random(0, 7, 'round'); colorchanger = timer + (500); }
        switch (num) {
            case 1: return '#ff0000'; break;
            case 2: return '#ffff00'; break;
            case 3: return '#00ff00'; break;
            case 4: return '#00ffff'; break;
            case 5: return '#0000ff'; break;
            case 6: return '#ff00ff'; break;
            case 7: return '#ffac00'; break;
        }
    }

    // Function to make firework
    createFirework = function () {
        firework = new Firework();

        firework.x = firework.sx = clientWidth / 2;
        firework.y = firework.sy = clientHeight;

        firework.color = colors();

        if (x != 0 && y != 0) {
            firework.tx = x;
            firework.ty = y;
            x = y = 0;
        } else {
            firework.tx = random(400, clientWidth - 400);
            firework.ty = random(0, clientHeight / 2);
        }

        var angle = getAngle(firework.sx, firework.sy, firework.tx, firework.ty);

        firework.vx = Math.cos(angle * Math.PI / 180.0);
        firework.vy = Math.sin(angle * Math.PI / 180.0);

        fireworks.push(firework);
    }

    // Function to start Firework
    Firework = function () {

        this.x = 0;
        this.y = 0;
        this.sx = 0;
        this.sy = 0;
        this.tx = 0;
        this.ty = 0;
        this.vx = 0;
        this.vy = 0;
        this.color = 'rgb(255,255,255)';
        this.dis = distance(this.sx, this.sy, this.tx, this.ty);
        this.speed = random(700, 1100);
        this.gravity = 1.5;
        this.ms = 0;
        this.s = 0;
        this.del = false;

        this.update = function (ms) {
            this.ms = ms / 1000;

            if (this.s > 2000 / ms) {
                createParticles(typecount, 50, this.x, this.y, this.color); // Increased particle count
                this.del = true;
            } else {
                this.speed *= 0.98;
                this.x -= this.vx * this.speed * this.ms;
                this.y -= this.vy * this.speed * this.ms - this.gravity;
            }

            this.s++;
        }

        this.draw = function () {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI); // Increased firework size
            ctx.fill();
        }
    }

    // Function to create array particles
    createParticles = function (type, count, pox, poy, color) {
        for (var i = 0; i < count; i++) {
            par = new Particles();
            par.type = type;

            par.color = color;
            par.x = pox;
            par.y = poy;

            var angle = random(0, 360);
            par.vx = Math.cos(angle * Math.PI / 180.0);
            par.vy = Math.sin(angle * Math.PI / 180.0);

            particles.push(par);
        };
    }

    // Function to make particles
    Particles = function () {

        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.speed = random(200, 500);
        this.gravity = 1;
        this.wind = 0;
        this.type = 1;
        this.opacity = 1;
        this.s = 0;
        this.scale = 1;
        this.color = '#FFF';
        this.del = false;

        this.update = function (ms) {
            this.ms = ms / 1000;

            if (this.s > 900 / ms) { if (this.opacity - 0.05 < 0) { this.opacity = 0; } else { this.opacity -= 0.05; } }

            if (this.type == 1) {
                this.speed *= 0.96;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms - this.gravity;
            } else if (this.type == 2) {
                if (this.s < 800 / ms) { this.scale += 0.1; } else { this.scale -= 0.2; }
                this.speed *= 0.96;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms - this.gravity;
            } else if (this.type == 3) {
                this.speed *= 0.95;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms;
            } else if (this.type == 4) {
                this.speed *= 0.96;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms - this.gravity;

                spark = new Sparkler();
                spark.x = this.x;
                spark.y = this.y;
                spark.vx = Math.cos(random(0, 360, 'round') * (Math.PI / 180)) * 1.05;
                spark.vy = Math.sin(random(0, 360, 'round') * (Math.PI / 180)) * 1.05;
                spark.tx = this.x;
                spark.ty = this.y;
                spark.color = this.color;
                spark.limit = random(4, 10, 'round');
                sparks.push(spark);
            } else {

            }

            this.s++;
        }

        this.draw = function () {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;

            if (this.type == 1) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2.5, 0, 2 * Math.PI); // Increased particle size
                ctx.fill();
            } else if (this.type == 2) {
                ctx.translate(this.x, this.y);
                ctx.scale(this.scale, this.scale);
                ctx.beginPath();
                ctx.fillRect(0, 0, 2, 2); // Increased particle size
            } else if (this.type == 3) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.vx * 10, this.y - this.vy * 10);
                ctx.stroke();
            } else if (this.type == 4) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2.5, 0, 2 * Math.PI); // Increased particle size
                ctx.fill();
            } else {
                ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI); // Increased particle size
                ctx.fill();
            }

            ctx.closePath();
            ctx.restore();
        }
    }

    // Function for sparkler type of firework
    Sparkler = function () {

        this.x = 0;
        this.y = 0;
        this.tx = 0;
        this.ty = 0;
        this.limit = 0;
        this.color = 'red';

        this.update = function () {
            this.tx += this.vx;
            this.ty += this.vy;

            this.limit--;
        }

        this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.tx, this.ty);
            ctx.lineWidth = 1;
            ctx.strokeStyle = this.color;
            ctx.stroke();
            ctx.closePath();
        }
    }

    text = function () {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.font = "14px arial";
        ctx.fillText("", 2, clientHeight - 2);
    }
    // Mouse coordinates to fire
    canvas.addEventListener('mousedown', function (evt) {
        evt = evt || window.event;
        var button = evt.which || evt.button;
        if (button == 1) {
            // If button is first (left) on mouse
            x = evt.clientX; y = evt.clientY; createFirework();
        } else if (button == 2) {
            // If button is second (right) on mouse
            if (typecount == 4) { typecount = 1; } else { typecount++; }
        }
    });

    update = function (frame) {

        // text to control firework
        text();

        // Every tick clear screen with black rectangle with opacity 0.15
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(0, 0, clientWidth, clientHeight);


        if (timer > LimiterTicker) {
            // Creating array with starting Firework
            createFirework();

            LimiterTicker = timer + (TimedFirework / frame);
        }

        var i = fireworks.length;
        while (i--) {
            // Progress starting Fireworks
            if (fireworks[i].del == true) { fireworks.splice(i, 1); } else {
                fireworks[i].update(frame);
                fireworks[i].draw();
            }
        }

        var i = particles.length;
        while (i--) {
            // Progress particles
            if (particles[i].opacity == 0) { particles.splice(i, 1); } else {
                particles[i].update(frame);
                particles[i].draw();
            }
        }

        var i = sparks.length;
        while (i--) {
            // Progress sparks
            if (sparks[i].limit < 0) { sparks.splice(i, 1); } else {
                sparks[i].update(frame);
                sparks[i].draw();
            }
        }

        timer++;
    }

    var main = setInterval(function () { update(frameDelay); }, frameDelay);

    // Stop fireworks after 20 seconds
    setTimeout(function () {
        clearInterval(main);
        fireover()
    }, 40000);
};
