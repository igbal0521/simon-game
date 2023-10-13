

// color - click - Start

// 1 - random - 1 - click =save - click button
// listenre - click -catch-check
// if (next)
//         else {
//     out
// }

// 2 - random - 2 - click =save - click button - array store
// listenre - click -catch-check - array store

// 3

// 4
let myclick = [];
i = 0;
let randomclick = [];
j = 0;
level = 2;

$('.color').on("click", myclickfun);

setTimeout(ownclick, 1000)



function ownclick() {
    let random = Math.round(Math.random() * 3 + 1);

    if (random == 1) {
        $('.red').css("opacity", "0");
        setTimeout(() => { $('.red').css("opacity", "1"); }, 200)
        randomclick[j] = 1;
        console.log(randomclick)
    }

    if (random == 2) {
        $('.yellow').css("opacity", "0");
        setTimeout(() => { $('.yellow').css("opacity", "1"); }, 200)
        randomclick[j] = 2;
        console.log(randomclick)

    }
    if (random == 3) {
        $('.blue').css("opacity", "0");
        setTimeout(() => { $('.blue').css("opacity", "1"); }, 200)
        randomclick[j] = 3;
        console.log(randomclick)

    }

    if (random == 4) {
        $('.green').css("opacity", "0");
        setTimeout(() => { $('.green').css("opacity", "1"); }, 200)
        randomclick[j] = 4;
        console.log(randomclick)

    }

    j++;
}

function myclickfun(e) {

    if (e.target.classList.contains('red')) {
        $('.red').css("opacity", ".5");
        setTimeout(() => { $('.red').css("opacity", "1"); }, 200)
        myclick[i] = 1;
        console.log(myclick)
    }

    if (e.target.classList.contains('yellow')) {
        $('.yellow').css("opacity", ".5");
        setTimeout(() => { $('.yellow').css("opacity", "1"); }, 200)
        myclick[i] = 2;
        console.log(myclick)

    }

    if (e.target.classList.contains('blue')) {
        $('.blue').css("opacity", ".5");
        setTimeout(() => { $('.blue').css("opacity", "1"); }, 200)
        myclick[i] = 3;
        console.log(myclick)

    }

    if (e.target.classList.contains('green')) {
        $('.green').css("opacity", ".5");
        setTimeout(() => { $('.green').css("opacity", "1"); }, 200)
        myclick[i] = 4;
        console.log(myclick)

    }
    i++;

    if (myclick.length == randomclick.length){
        increaselevel();
    }
}

function increaselevel() {
        
    console.log(myclick + " " + randomclick)

        for (let x = 0; x < randomclick.length; x++) {
          
            if (myclick[x] == randomclick[x]) {
                c=true;

            }
            else {
                c=false;
            
                $('h1').html(`"game over"`)
                break;
            }
    
    }
    if(c){
         myclick = [];
    i = 0;
    randomclick = [];
    j = 0;
    time=2000;
    $('h1').html(`Level-${level}`)
    for (let i = 1; i <=level; i++) {
        time=time+1000;
        setTimeout(ownclick, time)
    }
    level++;
}

    // myclick = []; 1
    // i = 0;
    // randomclick = [];
    // j = 0;      
    // setTimeout(ownclick, 1000)
    // setTimeout(ownclick, 2000)

  
}



// let myclick = [];
// i = 0;
// function startfun() {

//     let random = Math.round(Math.random() * 3 + 1);

//     if (random == 1) {
//         $('.red').trigger('click');
//         myclick[i] = 1;
//         setTimeout(() => { $('.red').css("opacity", "1"); }, 200)
//     }
//     if (random == 2) {
//         $('.yellow').trigger('click');
//         myclick[i] = 2;
//         setTimeout(() => { $('.yellow').css("opacity", "1"); }, 200)
//     }

//     if (random == 3) {
//         $('.blue').trigger('click');
//         myclick[i] = 3;
//         setTimeout(() => { $('.blue').css("opacity", "1"); }, 200)
//     }
//     if (random == 4) {
//         $('.green').trigger('click');
//         myclick[i] = 4;
//         setTimeout(() => { $('.green').css("opacity", "1"); }, 200)
//     }
// }


// setInterval(()=>{
//     if()
// const a=setInterval(triger, 1000);
// t=1000*i;
// setTimeout(()=>{clearInterval(a);},t)
// i++;
// },10000)




// function triger() {

//     let random = Math.round(Math.random() * 3 + 1);

//     if (random == 2) {
//         $('.yellow').trigger('click');
//         setTimeout(() => { $('.yellow').css("opacity", "1"); }, 200)
//     }
//     if (random == 1) {
//         $('.red').trigger('click');
//         setTimeout(() => { $('.red').css("opacity", "1"); }, 200)
//     }
//     if (random == 3) {
//         $('.blue').trigger('click');
//         setTimeout(() => { $('.blue').css("opacity", "1"); }, 200)
//     }
//     if (random == 4) {
//         $('.green').trigger('click');
//         setTimeout(() => { $('.green').css("opacity", "1"); }, 200)
//     }
// }
