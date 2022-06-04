import { useServerKeys } from '../../context/KeysContext'
import { caesarShift } from '../../helpers/caesarShift'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const ServerMessenger = ({
	message,
	setMessage,
	receivedMessage,
	setReceivedMessage,
	setIsArrowShown,
	isArrowShown,
	setIsOpen
}) => {
	const { keys } = useServerKeys()

	const [isEncrypted, setIsEncrypted] = useState(false)
	const [isDecrypted, setIsDecrypted] = useState(false)
	const [isAllKeysSet, setIsAllKeysSet] = useState(false)

	useEffect(() => {
		setIsAllKeysSet(
			keys.publicKey && keys.privateKey && keys.partialKey && keys.fullKey
		)
	}, [keys])

	function handleEncrypt() {
		// keys.fullKey.c[0] - getting an ordinary number from the BigNumber object
		let encryptedMessage = caesarShift(message.serverMessage, keys.fullKey.c[0])
		setTimeout(() => {
			setReceivedMessage({ ...message, receivedFromServer: encryptedMessage })
		}, 1000)
		setIsEncrypted(p => !p)
		setIsArrowShown({ ...isArrowShown, serverToClient: true })
		setTimeout(() => {
			setIsArrowShown({ ...isArrowShown, serverToClient: false })
		}, 1000)
		setIsAllKeysSet(false)
		setTimeout(() => setIsAllKeysSet(true), 1000)
	}

	function handleDecrypt() {
		if (
			message.clientMessage !==
				caesarShift(receivedMessage.receivedFromClient, -keys.fullKey.c[0]) &&
			receivedMessage
		) {
			setIsOpen(true)
			return
		}
		let decryptedMessage = caesarShift(
			receivedMessage.receivedFromClient,
			-keys.fullKey.c[0]
		)
		setReceivedMessage({
			...receivedMessage,
			receivedFromClient: decryptedMessage
		})
		setIsDecrypted(p => !p)
	}

	return (
		<div className="server-messenger-container">
			<div className="server__message-section-container">
				<input
					disabled={!isAllKeysSet}
					className="server__message"
					placeholder="Enter message..."
					value={message.serverMessage}
					onChange={e =>
						setMessage({ ...message, serverMessage: e.target.value })
					}
				/>
				<button
					disabled={!isAllKeysSet}
					className="server__messenger-btn"
					onClick={handleEncrypt}
				>
					Encrypt
					<br />
					and send
				</button>
				<FontAwesomeIcon
					icon={faLock}
					className={
						isEncrypted ? 'server__icon-lock' : 'server__icon-lock active'
					}
				/>
			</div>
			<div className="server__message-section-container">
				<input
					className="server__message"
					readOnly
					placeholder="Recieved message"
					value={receivedMessage.receivedFromClient}
				/>
				<button
					disabled={!isAllKeysSet}
					className="server__messenger-btn"
					onClick={handleDecrypt}
				>
					Decrypt
				</button>
				<FontAwesomeIcon
					icon={faUnlockKeyhole}
					className={
						isDecrypted ? 'server__icon-unlock' : 'server__icon-unlock active'
					}
				/>
			</div>
		</div>
	)
}

export default ServerMessenger
