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
  let newlist = document.createElement('li')
  newlist.innerHTML = `${todolistinputvalue.value}<button onclick='todolistdelete(this)'>Delete</button>`
  todolistbox.appendChild(newlist)
}
function todolistdelete(ele){
  ele.parentElement.remove()
}