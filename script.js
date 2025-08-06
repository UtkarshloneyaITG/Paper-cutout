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

      if(arr[x] == ' ')textChanging.innerText = ' '
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


headerForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let inputValue = searchBarInput.value;
  inputValue.toLowerCase()
  console.log(inputValue == 'table')
    
  
})