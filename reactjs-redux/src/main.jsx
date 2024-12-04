import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
// this provider component is essential for integrating our redux with the react app application
// it is used to rap our entire react-app application and makes redux-store available to all the components in our app so that the components can interact with the store and use the hooks like useSelector and useDispatch

import Store from './store/store.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
