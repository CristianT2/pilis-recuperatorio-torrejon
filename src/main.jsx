import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { QuestionsContextProvider } from './Contexts/QuestionsContext'
import { UserContextProvider } from './Contexts/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <UserContextProvider>
        <QuestionsContextProvider>
          <App />
        </QuestionsContextProvider>
      </UserContextProvider>
    </HashRouter>
  </React.StrictMode>,
)
