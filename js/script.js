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
    sun_moon.innerHTML = `<span id="sun-moon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%"
                          height="100%" viewBox="0 0 50 50" style="fill:#FFFFFF;">
                          <path
                            d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 25 15 C 19.484375 15 15 19.484375 15 25 C 15 30.515625 19.484375 35 25 35 C 30.515625 35 35 30.515625 35 25 C 35 19.484375 30.515625 15 25 15 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z">
                          </path>
                        </svg>`
  }
  else {
    dark_bright_mode.style.marginLeft = '20px';
    document.body.style.background = 'black'
    dark_bright_mode.style.background = 'white'
    dark_bright_box.style.background = 'white'
    dark_bright_mode.style.borderColor = 'black'
    sun_moon.innerHTML = `<svg width="100%" height="100%F" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="cutout">
      <rect width="100" height="100" fill="white"/>
      <circle cx="60" cy="50" r="35" fill="black"/>
    </mask>
  </defs>
  <circle cx="50" cy="50" r="40" fill="black" mask="url(#cutout)"/>
</svg>

`
  }

}
function pop_up_clear() {
  pop_up.style.display = 'none'
  clearInterval(stopText)
  clearInterval(wordchangingMain)
}
  let arrOftext =  ['developer','gamer','Artist']
  let x = 0;
  let n = arrOftext.length
let wordchangingMain = setInterval(() => {
 let words = arrOftext[x]
 let  y = 0;
 let stopText = setInterval(() => {
   if(y < words.length){
     textChanging.innerText += words[y]
     y++
    }
    else{
      stopWord()
    }
  },200)
  
  function stopWord(){
    clearInterval(stopText)
  }
  textChanging.innerText = ''
  x++
x = x%n
}, 3000)
setTimeout(()=>{
pop_up.style.display = 'block'
},2000)



// loader js

window.addEventListener('load',()=>{
  document.getElementById('loader').style.display = 'none'
  document.getElementById('loaded').style.display = 'block'
})
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
  }, 10)
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
function todolistadd() {
  if (todolistinputvalue.value == '') {
    todolistinputvalue.value = 'Empty'
  }
  let newlist = document.createElement('li')
  newlist.innerHTML = `${todolistinputvalue.value}<button onclick='todolistdelete(this)' class='todolist-delete-button'>Delete</button>`
  todolistbox.appendChild(newlist)
  todolistinputvalue.value = ''
}
function todolistdelete(ele) {
  ele.parentElement.remove()
}
function todolistEdit(ele) {

  let todolisteditenable = document.querySelector('.to-do-list-input')
  if (todolisteditenable.style.visibility == 'visible') {
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
  else {
    todolisteditenable.style.visibility = 'visible'
    ele.innerText = 'save'
    todolist_delete_button_one()
  }
}
let todolistdeletebutton = document.getElementsByClassName('todolist-delete-button')
function todolist_delete_button_one() {

  for (let x = 0; x < todolistdeletebutton.length; x++) {
    todolistdeletebutton[x].style.display = 'block'
  }
}
function todolist_delete_button_two() {

  for (let x = 0; x < todolistdeletebutton.length; x++) {
    todolistdeletebutton[x].style.display = 'none'
  }
}

{ //to do list logic
let todolistupbutton = document.getElementById('todolist-up-button')
let todolist_overflow_box = document.querySelector('.to-do-list-edit-main-page-body-inner')
let todolistdownbutton = document.getElementById('todolist-down-button');
todolist_overflow_box.addEventListener('scroll', () => {

  console.log(todolist_overflow_box.scrollHeight)

  if (todolist_overflow_box.scrollTop > 0) {
    todolistupbutton.style.display = 'block'
  }
  else {
    todolistupbutton.style.display = 'none'
  }

  if (todolist_overflow_box.scrollTop + todolist_overflow_box.scrollHeight == todolist_overflow_box.scrollHeight) {
    todolistdownbutton.style.display = 'block'
  }
  else {
    todolistdownbutton.style.display = 'none'
  }
})
todolistupbutton.addEventListener('click', () => {
  todolist_overflow_box.scrollTop = 0;

})
todolistdownbutton.addEventListener('click', () => {
  todolist_overflow_box.scrollTop = todolist_overflow_box.scrollHeight
})
}
 {
      //ball game code
    let scoreBoard = document.querySelector('.game-score-board-single')
    let gameBall = document.querySelector('.game-ball');
    let time = document.querySelector('.time');
    let scorecounter = document.querySelector('.score');
    let button = document.getElementById('button')
    let scoreBoard_score = document.querySelector('.game-score') 
    function gamestart() {
      scoreBoard.style.display = 'none'
      console.log(gameBall.ofsetWidth)
      let gametime = 30;
      let seconds = gametime;
      let score = 0;
      scorecounter.innerText = score;
      button.setAttribute('disabled', 'true')

      //timer interval 
      let timer = setInterval(() => {
        if (seconds > 0) {
          seconds--
          if (seconds < 10) time.innerText = '0' + seconds;
    
          else time.innerText = seconds;
        }
        else {
          stoptimer()

        }
      }, 1000)
      //stop every thing 
      function stoptimer() {
        scoreBoard_score.innerText = score
        score = 0;
        time.innerText = '30'
        scorecounter.innerText = '00'
        gameBall.style.display = 'none'
        clearInterval(timer)
        clearInterval(position)
        button.removeAttribute('disabled', 'true')
        scoreBoard.style.display = 'flex'
      }

      //  ball moving function
      let position = setInterval(() => {
        gameBall.style.display = 'block'
        let xAxis = Math.floor(Math.random() * 398)
        let yAxis = Math.floor(Math.random() * 398) 
        gameBall.style.top = `${yAxis}px`
        gameBall.style.left = `${xAxis}px`
      }, 1000)

      //score logic
      gameBall.addEventListener('click', () => {
        score++
        if (seconds < gametime) {
          scorecounter.innerText = score;
          gameBall.style.display = 'none'
        }
      })

    }
  }