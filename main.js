import './style.css'
import './src/sand.jpg'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vitessser!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <img src="${chrome.runtime.getURL('src/sand.jpg')}" />
  <button>Count: 0</button>
`

let count = 0
const button = document.querySelector('#app button')
button.addEventListener('click', () => {
  count++
  button.textContent = `Count: ${count}`
})