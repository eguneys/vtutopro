import './index.css'
import { render } from 'solid-js/web'

import App from './view'

import { Tuto } from './tuto'

export default function VTutopro(element: HTMLElement, options = {}) {

  let tuto = new Tuto()
  render(App(tuto), element)

  return {
  }
}
