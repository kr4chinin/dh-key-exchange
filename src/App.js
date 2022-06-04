import './styles/App.css'
import { KeysContextProvider } from './context/KeysContext'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import Client from './components/client/Client'
import Server from './components/server/Server'
import ServerMessenger from './components/server/ServerMessenger'
import ClientMessenger from './components/client/ClientMessenger'
import Arrow from './components/arrow/Arrow'
import DecryptWarning from './components/modal/DecryptWarning'

function App() {
	useEffect(() => {
		document.body.style.zoom = '97%'
	}, [])

	const [message, setMessage] = useState({
		clientMessage: '',
		serverMessage: ''
	})
	const [isArrowShown, setIsArrowShown] = useState({
		clientToServer: false,
		serverToClient: false
	})
	const [receivedMessage, setReceivedMessage] = useState({
		receivedFromServer: '',
		receivedFromClient: ''
	})
	const [isWarningOpen, setIsWarningOpen] = useState(false)

	return (
		<KeysContextProvider>
			<div className="App">
				<div className="global-container">
					<div className="client-container">
						<label className="server-label">
							<h1>Client</h1>
						</label>
						<Client />
						<ClientMessenger
							message={message}
							receivedMessage={receivedMessage}
							setReceivedMessage={setReceivedMessage}
							setMessage={setMessage}
							isArrowShown={isArrowShown}
							setIsArrowShown={setIsArrowShown}
							setIsOpen={setIsWarningOpen}
						/>
					</div>
					<div className="middle-container">
						<div className="keys-icon-container">
							<FontAwesomeIcon
								icon={faKey}
								className="first-key"
							/>
							<FontAwesomeIcon
								icon={faKey}
								className="second-key"
							/>
						</div>
						<div className="channel-box">
							<Arrow
								from="client"
								isShown={isArrowShown.clientToServer}
							/>
							<Arrow
								from="server"
								isShown={isArrowShown.serverToClient}
							/>
						</div>
					</div>
					<div className="server-container">
						<label className="server-label">
							<h1>Server</h1>
						</label>
						<Server />
						<ServerMessenger
							message={message}
							receivedMessage={receivedMessage}
							setReceivedMessage={setReceivedMessage}
							setMessage={setMessage}
							setIsArrowShown={setIsArrowShown}
							isArrowShown={isArrowShown}
							setIsOpen={setIsWarningOpen}
						/>
					</div>
				</div>
			</div>
			<DecryptWarning
				isOpen={isWarningOpen}
				setIsOpen={setIsWarningOpen}
			/>
		</KeysContextProvider>
	)
}

export default App
