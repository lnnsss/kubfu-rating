/*----переменные-------------------------------------------*/

const file1 = document.getElementById("file1"),
    resBlock = document.querySelector(".resBlock");

let kitTittle = document.getElementById("kitTittle"),
    kitType = document.getElementById("kitType"),
    kitAutor = document.getElementById("kitAutor"),
    kitKeep = document.getElementById("kitKeep"),
    resTittle = document.getElementById("resTittle"),
    resType = document.getElementById("resType"),
    resAutor = document.getElementById("resAutor"),
    resUl = document.querySelector(".resUl"),
    uniOc = document.querySelector(".uniOc"),
    resBalls = document.getElementById("resBalls"),
    resXs = document.getElementById("resXs");

let kitUni = 1,
    kitNap = 1,
    kitZvu = 1,
    kitCel = 1,
    kitAct = 1,
    kitViz = 1,
    kitBallSum = (kitUni + kitNap + kitZvu + kitCel + kitViz),
    kitBalls = Math.ceil(kitBallSum + (kitBallSum / 100 * (10*kitAct))),
    kitXs = Math.trunc(kitBalls  / 68 * 1000);

    resBalls.innerHTML = kitBalls;
    resXs.innerHTML = kitXs;

/*----функции-------------------------------------------*/

function displayLi(arr) {
    let lis = [];
    for (let i=0; i != 9; i++) {
        let  li = `<li class="resLi">${arr[i]}</li>`;
        lis += li;
    };
    resUl.innerHTML = lis;
};


/*----OcListen-------------------------------------------*/

let uniOcNL = document.querySelectorAll(".uniOc span");
let uniOcAr = Array.from(uniOcNL);
uniOcAr.forEach(dot => dot.addEventListener('click', uniHandleClick));
function uniHandleClick(e) {
    uniOcAr.forEach(dot => dot.classList.remove('active'));
    e.target.classList.add('active');
    kitUni = Number(e.target.innerHTML);
    kitBallSum = (kitUni + kitNap + kitZvu + kitCel + kitViz);
    kitBalls = Math.ceil(kitBallSum + (kitBallSum / 100 * (10*kitAct)));
    kitXs = Math.trunc(kitBalls  / 68 * 1000);
    resBalls.innerHTML = kitBalls;
    resXs.innerHTML = kitXs;
};

let napOcNL = document.querySelectorAll(".napOc span");
let napOcAr = Array.from(napOcNL);
napOcAr.forEach(dot => dot.addEventListener('click', napHandleClick));
function napHandleClick(e) {
    napOcAr.forEach(dot => dot.classList.remove('active'));
    e.target.classList.add('active');
    kitNap = Number(e.target.innerHTML);
    kitBallSum = (kitUni + kitNap + kitZvu + kitCel + kitViz);
    kitBalls = Math.ceil(kitBallSum + (kitBallSum / 100 * (10*kitAct)));
    kitXs = Math.trunc(kitBalls  / 68 * 1000);
    resBalls.innerHTML = kitBalls;
    resXs.innerHTML = kitXs;
};

let zvuOcNL = document.querySelectorAll(".zvuOc span");
let zvuOcAr = Array.from(zvuOcNL);
zvuOcAr.forEach(dot => dot.addEventListener('click', zvuHandleClick));
function zvuHandleClick(e) {
    zvuOcAr.forEach(dot => dot.classList.remove('active'));
    e.target.classList.add('active');
    kitZvu = Number(e.target.innerHTML);
    kitBallSum = (kitUni + kitNap + kitZvu + kitCel + kitViz);
    kitBalls = Math.ceil(kitBallSum + (kitBallSum / 100 * (10*kitAct)));
    kitXs = Math.trunc(kitBalls  / 68 * 1000);
    resBalls.innerHTML = kitBalls;
    resXs.innerHTML = kitXs;
};

let celOcNL = document.querySelectorAll(".celOc span");
let celOcAr = Array.from(celOcNL);
celOcAr.forEach(dot => dot.addEventListener('click', celHandleClick));
function celHandleClick(e) {
    celOcAr.forEach(dot => dot.classList.remove('active'));
    e.target.classList.add('active');
    kitCel = Number(e.target.innerHTML);
    kitBallSum = (kitUni + kitNap + kitZvu + kitCel + kitViz);
    kitBalls = Math.ceil(kitBallSum + (kitBallSum / 100 * (10*kitAct)));
    kitXs = Math.trunc(kitBalls  / 68 * 1000);
    resBalls.innerHTML = kitBalls;
    resXs.innerHTML = kitXs;
};

let actOcNL = document.querySelectorAll(".actOc span");
let actOcAr = Array.from(actOcNL);
actOcAr.forEach(dot => dot.addEventListener('click', actHandleClick));
function actHandleClick(e) {
    actOcAr.forEach(dot => dot.classList.remove('active'));
    e.target.classList.add('active');
    kitAct = Number(e.target.innerHTML);
    kitBallSum = (kitUni + kitNap + kitZvu + kitCel + kitViz);
    kitBalls = Math.ceil(kitBallSum + (kitBallSum / 100 * (10*kitAct)));
    kitXs = Math.trunc(kitBalls  / 68 * 1000);
    resBalls.innerHTML = kitBalls;
    resXs.innerHTML = kitXs;
};

let vizOcNL = document.querySelectorAll(".vizOc span");
let vizOcAr = Array.from(vizOcNL);
vizOcAr.forEach(dot => dot.addEventListener('click', vizHandleClick));
function vizHandleClick(e) {
    vizOcAr.forEach(dot => dot.classList.remove('active'));
    e.target.classList.add('active');
    kitViz = Number(e.target.innerHTML);
    kitBallSum = (kitUni + kitNap + kitZvu + kitCel + kitViz);
    kitBalls = Math.ceil(kitBallSum + (kitBallSum / 100 * (10*kitAct)));
    kitXs = Math.trunc(kitBalls  / 68 * 1000);
    resBalls.innerHTML = kitBalls;
    resXs.innerHTML = kitXs;
};

/*----form-------------------------------------------*/
function save()  {

    resBlock.classList.add("active");

    let kitTittleValue = kitTittle.value,
        kitTypeValue = kitType.value,
        kitAutorValue = kitAutor.value,
        kitKeepValue = kitKeep.value;

    let kitKeepArray = kitKeepValue.split(",");

    /*----img----*/
    let f = file1.files[0];
    if (f) {
        image1.src = URL.createObjectURL(f);
        localStorage.setItem('myImage', image1.src);
        image2.src = URL.createObjectURL(f);
        localStorage.setItem('myImage', image2.src);
    };

    resTittle.innerHTML = kitTittleValue;
    resType.innerHTML = kitTypeValue;
    resAutor.innerHTML = kitAutorValue;
    displayLi(kitKeepArray);

    kitTypeValue = '';
    kitAutorValue = '';
    kitKeepValue = '';

};

