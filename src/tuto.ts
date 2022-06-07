import { mapArray, createSignal, createEffect, createMemo } from 'solid-js'
import { read, write, owrite } from './play'  
import { make_position } from './make_util'

export class Tuto {

 
  get boxes() {
   return this._boxes.boxes
  }

  constructor() {
    this._boxes = make_boxes(this)
  }

}

const make_boxes = (tuto: Tuto) => {
  
  let _boxes = createSignal([`file(a).`,`right(a-b).`,`righter(X-Y,[Z|Rest]) :- right(X-Z), righter(Z-Y, Rest).`])

  let m_boxes = createMemo(mapArray(_boxes[0], make_box))

  return {
    get boxes() {
      return m_boxes()
    }
  }
}


const make_box = () => {
  

  let pos = make_position(0, 0)


  return {
   get args() {
     return []
   },
   pos
  }
}
