import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(console.error)
  })
}
if(!('Notification' in window)){
  throw new Error()
}
export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  if(permission !== 'granted'){
    throw new Error("Notification not allow")
  } else
  new Notification("Hello world")
}
// requestNotificationPermission()
