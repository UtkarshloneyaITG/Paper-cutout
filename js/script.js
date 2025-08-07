console.log('js running');
let dark_bright_mode = document.getElementById('dark-bright-mode'); //dark bright mode box
let dark_bright_box = document.getElementById('dark-bright-mode-box') // dark bright mode ball
let element = document.getElementsByClassName('element'); // dark bright mode class
let sun_moon = document.getElementById('sun-moon') // dark bright mode sun moon emoji
let pop_up = document.getElementById('pop-up') // pop up div 
let popUpColor = document.getElementById('pop-up-color') // pop up color
let textChanging = document.getElementById('text-changing') // pop up text 
let headerForm = document.getElementById('header-input-form') // header form
let searchBarInput = document.getElementById('search-bar-input'); //search bar input
let tableMainPrinting = document.getElementById('table-prinnting')
let stopText = null;
function darkBrightmodeChanger() {

  Array.from(element).forEach((ele) => {
    ele.classList.toggle('color-white');
  });

  if (dark_bright_mode.style.marginLeft == '20px') {
    dark_bright_mode.style.marginLeft = '0px';
    document.body.style.background = 'white'
    dark_bright_mode.style.background = 'black'
    dark_bright_box.style.background = 'black'
    dark_bright_mode.style.borderColor = 'white'
    sun_moon.innerText = '☀️'
  }
  else {
    dark_bright_mode.style.marginLeft = '20px';
    document.body.style.background = 'black'
    dark_bright_mode.style.background = 'white'
    dark_bright_box.style.background = 'white'
    dark_bright_mode.style.borderColor = 'black'
    sun_moon.innerText = '🌙'
  }

}
function pop_up_clear() {
  pop_up.style.display = 'none'
  clearInterval(stopText)
}
setTimeout(() => {
  let word = 'developer engerner gamer'
  let arr = word.split('')
  let x = 0;
  console.log(arr)
  pop_up.style.display = 'block'
  stopText = setInterval(() => {

    if (arr[x] == ' ') textChanging.innerText = ' '
    else textChanging.innerText += arr[x]
    textChanging.style.color = 'red'
    if (x == arr.length) {
      x = -1
      textChanging.innerText = ' '
    }
    x++
  }, 200)

}, 2000)


// function colorchanger(){
//   let x = Math.floor(Math.random()*255)-1
//   let y = Math.floor(Math.random()*255)-1
//   let z = Math.floor(Math.random()*255)-1
//   console.log(x,y,z)
//   return `rgb(${x},${y},${z})`
// }
// let stop = setInterval(()=>{
//   let color = `linear-gradient(${colorchanger()},${colorchanger()},${colorchanger()})`;
//   popUpColor.style.background = color;
// },100)
let banner = document.getElementById('banner');
let changingPage = document.getElementById('changingPage')
let tablesection = document.getElementById('table-table')
headerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputValue = searchBarInput.value.toLowerCase();
  let findPage = document.getElementsByClassName('page');
  let arrOfInputvalue = inputValue.split(' ')
  inputValue = ''
  for (let i = 0; i < arrOfInputvalue.length; i++) {
    if (arrOfInputvalue[i] == ' ') {
      continue;
    }
    inputValue += arrOfInputvalue[i]
  }

  for (let x = 0; x < findPage.length; x++) {
    if (findPage[x].classList.contains(inputValue)) {
      searchBarInput.style.color = 'green'
      setTimeout(() => {
        searchBarInput.style.color = 'black'
      }, 1000)

      findPage[x].classList.add('enable');
      for (let y = 0; y < findPage.length; y++) {
        if (findPage[y].classList.contains(inputValue)) {
          findPage[y].classList.remove('disable')
        }
        else {
          findPage[y].classList.add('disable')
          findPage[y].classList.remove('enable')
        }

      }
    }

  }
  // if (inputValue == 'table') {
  //   tablesection.setAttribute('class','enable')
  //   banner.setAttribute('class','disable')
  // }
  // else if(inputValue == 'home'){
  //   banner.setAttribute('class','enable')
  //   tablesection.setAttribute('class','disable')
  // }
})


let buttonTablePrinter = document.getElementById('button-table-printer')
let tableInput = document.getElementById('table-input')
function tablePrinter() {
  let tablevalue = tableInput.value;
  tableInput.value = ''
  buttonTablePrinter.style.display = 'none'
  tableMainPrinting.innerHTML = ''
  let x = 0
  if (tablevalue == '') {
    tablevalue = 1
  }
  let hello = setInterval(() => {
    x++
    if (x >= 10) {
      clearIntervalTable()
    }
    tableMainPrinting.innerHTML += `<p class ='element'>${tablevalue} x ${x} = ${x * tablevalue}<p>`
  }, 500)
  function clearIntervalTable() {
    clearInterval(hello)
    buttonTablePrinter.style.display = 'block';
  }
}

let textmanipulation = document.getElementById('text-maipulation-input')
let input_p_tag = document.getElementById('text-maipulation-input-text')
let output_p_tag = document.getElementById('text-maipulation-output-text')
let colorchange = document.getElementById('color-change')
let history = null;
function textManipulation() {

    input_p_tag.innerText = textmanipulation.value;
    output_p_tag.innerText = textmanipulation.value;

}
function bold() {
  if (output_p_tag.style.fontWeight == '400') {
    output_p_tag.style.fontWeight = '700'
  }
  else {
    output_p_tag.style.fontWeight = '400';
  }
}

let freeVariable = 0
let freeVariable2 = 0
let freeVariable3 = 0
let freeVariable4 = 0
function Uppercasetext() {
  if (freeVariable == 0) {
    output_p_tag.style.textTransform = 'uppercase'
    freeVariable++
  }
  else {
    output_p_tag.style.textTransform = 'none'
    freeVariable = 0
  }
}
function Lowercasetext() {
  if (freeVariable2 == 0) {
    output_p_tag.style.textTransform = 'lowercase'
    freeVariable2++
  }
  else {
    output_p_tag.style.textTransform = 'none'
    freeVariable2 = 0
  }
}
function textStyleItalic() {
  if (freeVariable3 == 0) {
    output_p_tag.style.fontStyle = 'italic'
    freeVariable3++
  }
  else {
    output_p_tag.style.fontStyle = 'normal'
    freeVariable3 = 0
  }
}
function textStylecolor() {
  output_p_tag.style.color = colorchange.value
}
function capatalizeEachWord() {
  if (freeVariable4 == 0) {
    output_p_tag.style.textTransform = 'capitalize'
    freeVariable4++
  }
  else {
    output_p_tag.style.textTransform = 'none'
    freeVariable4 = 0
  }
}
function clearText() {
  textmanipulation.value = '';

}
let todolistbox = document.getElementById('todolist')
let todolistinputvalue = document.getElementById('to-do-list-input')
function todolistadd(){
  if(todolistinputvalue.value == ''){
    todolistinputvalue.value = 'Empty'
  }
  let newlist = document.createElement('li')
  newlist.innerHTML = `${todolistinputvalue.value}<button onclick='todolistdelete(this)' class='todolist-delete-button'>Delete</button>`
  todolistbox.appendChild(newlist)
  todolistinputvalue.value = ''
}
function todolistdelete(ele){
  ele.parentElement.remove()
}
function todolistEdit(ele){
  
  let todolisteditenable = document.querySelector('.to-do-list-input')
  if(todolisteditenable.style.visibility == 'visible'){
    todolisteditenable.style.visibility = 'hidden'
    ele.innerHTML = `Edit  <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                          stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                          stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`
    todolist_delete_button_two()
  }
  else{
    todolisteditenable.style.visibility = 'visible'
    ele.innerText = 'save'
    todolist_delete_button_one()
  }
}
let todolistdeletebutton = document.getElementsByClassName('todolist-delete-button')
function todolist_delete_button_one(){
  
  for(let x = 0; x<todolistdeletebutton.length; x++){
      todolistdeletebutton[x].style.display = 'block'
  }
}
function todolist_delete_button_two(){
  
  for(let x = 0; x<todolistdeletebutton.length; x++){
      todolistdeletebutton[x].style.display = 'none'
  }
}

let todolistupbutton = document.getElementById('todolist-up-button')
let todolist_overflow_box = document.querySelector('.to-do-list-edit-main-page-body-inner')
let todolistdownbutton = document.getElementById('todolist-down-button');
todolist_overflow_box.addEventListener('scroll', ()=>{
  console.log(todolist_overflow_box.scrollHeight)
 
  if(todolist_overflow_box.scrollTop > 0){
    todolistupbutton.style.display = 'block'
  }
  else{
    todolistupbutton.style.display = 'none'
  }

  if(todolist_overflow_box.scrollTop+todolist_overflow_box.scrollHeight ==  todolist_overflow_box.scrollHeight){
    todolistdownbutton.style.display = 'block'
  }
  else{
    todolistdownbutton.style.display = 'none'
  }
})
todolistupbutton.addEventListener('click', ()=>{
   todolist_overflow_box.scrollTop =  0;

})
todolistdownbutton.addEventListener('click',()=>{
   todolist_overflow_box.scrollTop =  todolist_overflow_box.scrollHeight
})