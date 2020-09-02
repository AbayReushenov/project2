import {createStore} from 'redux'
import reducer from './reducer'
import {inc, dec, rnd} from './actions'



const store = createStore(reducer);
const {dispatch} = store

const incDispatch =()=>dispatch(inc())
const decDispatch =()=>dispatch(dec())
const rndDispatch =()=>dispatch(rnd())

document.getElementById('inc').addEventListener("click", incDispatch)


document.getElementById('dec').addEventListener("click", decDispatch)

document.getElementById('rnd').addEventListener("click", rndDispatch)

const update = () => {
  document.getElementById('counter').textContent = store.getState()
}

store.subscribe(update)


 