import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QuestionsContextProvider } from './Contexts/QuestionsContext'
import { UserContextProvider } from './Contexts/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <QuestionsContextProvider>
        <App />
      </QuestionsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
