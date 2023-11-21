import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//this is where it uses render to create the html
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)