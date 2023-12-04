import src from './sand.jpg'
import './content.css'

const html = `
<div class="crx">
  <img src="${chrome.runtime.getURL(src)}" />
<!--  <img src="https://vitejs.dev/logo.svg" />-->
</div>
`

const doc = new DOMParser().parseFromString(html, 'text/html')
document.body.append(doc.body.firstElementChild)

let n = 0;
let rotate = () => {
  const el = document.querySelector('canvas')
  el.style.transform = `rotate(${++n}deg)`

  requestAnimationFrame(rotate);
};
requestAnimationFrame(rotate);
// var canvas = document.querySelector("canvas");
// // get the context
// console.log(canvas);