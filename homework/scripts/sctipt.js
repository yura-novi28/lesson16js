//                 function
// const 
const getS = selector => document.querySelector(selector);
const getAllS = selectors => document.querySelectorAll(selectors);
// edit
function showEdit(){
    getS('.style').style.display = 'none';
    getS('.edit').style.display = 'block';
    getS('.area').value = getAllS('.block')[0].innerHTML;
}
function saveEdit(){
    getAllS('.block')[0].innerHTML = getS('.area').value;
    getS('.edit').style.display = 'none';
}

// style
let colorCheck = 0;
function showStyle(){
    getS('.edit').style.display = 'none';
    getS('.style').style.display = 'block';
}
function setSizeRadio(){
    if(event.target.matches('.radio-container__label')){
        getS('.container__top-block').style.fontSize = event.target.firstElementChild.value + 'px';
        for(let i = 0; i < getS('.container__top-block').children.length; i++){
            getS('.container__top-block').children[i].style.fontSize = event.target.firstElementChild.value + 'px';
        }
    }
    else if(event.target.matches('.radio-container__item')){
        getS('.container__top-block').style.fontSize = event.target.value + 'px';
        for(let i = 0; i < getS('.container__top-block').children.length; i++){
            getS('.container__top-block').children[i].style.fontSize = event.target.value + 'px';
        }
    }
}
const setFontFamily = () => getS('.container__top-block').style.fontFamily = getS('.select-container').value;
function showBlockColor(){
    event.preventDefault();
    if(event.target.textContent == 'Color of Text'){
        color = 1;
        getS('.style__container-color').style.display = 'flex';
    }
    if(event.target.textContent == 'Background color'){
        color = 2;
        getS('.style__container-color').style.display = 'flex';
    }
}
function setColor(){
    if(color === 1){
        getS('.container__top-block').style.color = getComputedStyle(event.target).backgroundColor;
        getS('.style__container-color').style.display = 'none';
    }
    else if(color === 2){
        getS('.container__top-block').style.backgroundColor = getComputedStyle(event.target).backgroundColor;
        getS('.style__container-color').style.display = 'none';
    }
}   
function setStyleText(){
    if((event.target.matches('.checkbox-container__item') || event.target.matches('.checkbox-container__label')) && event.target.checked){
        if(event.target.name === 'bold'){
            getS('.container__top-block').style.fontWeight = 'bold';
        }
        if(event.target.name === 'italic'){
            getS('.container__top-block').style.fontStyle = 'italic';
        }
        
    }
    else if(event.target.matches('.checkbox-container__item') || event.target.matches('.checkbox-container__label')){
        if(event.target.name === 'bold'){
            getS('.container__top-block').style.fontWeight = 'normal';
        }
        if(event.target.name === 'italic'){
            getS('.container__top-block').style.fontStyle = 'normal';
        }
    }
}

// add
function showTableList(){
    if(event.target.value === 'table'){
        getS('.form-list').style.display = 'none';
        getS('.form-table').style.display = 'block';
    }
    if(event.target.value === 'list'){
        getS('.form-table').style.display = 'none';
        getS('.form-list').style.display = 'block';
    }
    
}
function creatingTable(){
    // create table
    event.preventDefault();
    let TR = +getS('#countTr').value;
    let TD = +getS('#countTd').value;
    let widthTd = +getS('#widthTd').value;
    let heightTd = +getS('#heightTd').value;
    let userBorder = +getS('#widthBorder').value;
    let typeBorder = getS('#typeBorder').value;
    let colorBorder = getS('#colorBorder').value;
    let table = document.createElement('table');
    getS('.container__top-block').append(table);
    table.style.marginTop = `5px`;
    for(let i = 0; i < TR; i++){
        let tr = document.createElement('tr');
        table.append(tr);
        for(let j = 0; j < TD; j++){
            let td = document.createElement('td');
            td.textContent = 'TD';
            td.style.width = widthTd + 'px';
            td.style.height = heightTd + 'px';
            td.style.border = `${userBorder}px ${typeBorder} ${colorBorder}`;
            tr.append(td);
        }
    }
    getS('.area').value = getAllS('.block')[0].innerHTML;
    table.remove();
    getS('.edit').style.display = 'block';
    // show container Main
    getS('#containerMain').style.display = 'block';
    getS('#containerAdd').style.display = 'none';
}

function addShow(){
    getS('#containerMain').style.display = 'none';
    getS('#containerAdd').style.display = 'block';
}

function creatingList(){
    event.preventDefault();
    let numList = +getS('#countLi').value;
    let typeMarks = getS('#typeMarks').value;
    let ul = document.createElement('ul');
    ul.style.listStyle = typeMarks;
    ul.style.marginLeft = '20px';
    getS('.container__top-block').append(ul);
    for(let i = 1; i <= numList; i++){
        let li = document.createElement('li');
        li.textContent = `item ${i}`;
        ul.append(li);
    }
    getS('.area').value = getAllS('.block')[0].innerHTML;
    ul.remove();
    getS('.edit').style.display = 'block';
    // show container Main
    getS('#containerMain').style.display = 'block';
    getS('#containerAdd').style.display = 'none';
}
//                 addEvent
// edit
getS('#buttonEdit').addEventListener('click', showEdit);
getS('#buttonSave').addEventListener('click', saveEdit);
// style
getS('#buttonStyle').addEventListener('click', showStyle);
getS('.radio-container').addEventListener('click', setSizeRadio);
getS('.select-container').addEventListener('click', setFontFamily);
getS('.button-container').addEventListener('click', showBlockColor);
getS('.style__container-color').addEventListener('click', setColor);
getS('.checkbox-container').addEventListener('click', setStyleText);
// add
getAllS('.radio-container')[1].addEventListener('click', showTableList);
getS('.button-create').addEventListener('click', creatingTable);
getAllS('.button-create')[1].addEventListener('click', creatingList);
getS('#buttonAdd').addEventListener('click', addShow);