import {createStore} from 'redux'
import rootReducer from './index'

export default function configuretore() {
  return createStore(rootReducer)
}