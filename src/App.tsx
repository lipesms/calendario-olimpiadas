import {Provider} from 'react-redux'

import { store } from './store'

import './App.css'

import Home from './containers/Home'



function App() {

  return (
    <Provider store={store}>
      <div className='background'>
        <div className='container'>
          <Home />
        </div>
        
      </div>
    </Provider>
  )
}

export default App
