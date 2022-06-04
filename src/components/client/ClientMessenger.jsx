import { useClientKeys } from '../../context/KeysContext'
import { caesarShift } from '../../helpers/caesarShift'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const ClientMessenger = ({
	message,
	setMessage,
	receivedMessage,
	setReceivedMessage,
	setIsArrowShown,
	isArrowShown,
	setIsOpen
}) => {
	const { keys } = useClientKeys()
	const [isEncrypted, setIsEncrypted] = useState(false)
	const [isDecrypted, setIsDecrypted] = useState(false)

	useEffect(() => {
		setIsAllKeysSet(
			keys.publicKey && keys.privateKey && keys.partialKey && keys.fullKey
		)
	}, [keys])

	const [isAllKeysSet, setIsAllKeysSet] = useState(false)

	function handleEncryptAndSend() {
		// keys.fullKey.c[0] - getting an ordinary number from the BigNumber object
		let encryptedMessage = caesarShift(message.clientMessage, keys.fullKey.c[0])
		setTimeout(() => {
			setReceivedMessage({
				...receivedMessage,
				receivedFromClient: encryptedMessage
			})
		}, 1000)
		setIsEncrypted(p => !p)
		setIsArrowShown({ ...isArrowShown, clientToServer: true })
		setTimeout(() => {
			setIsArrowShown({ ...isArrowShown, clientToServer: false })
		}, 1000)
		setIsAllKeysSet(false)
		setTimeout(() => setIsAllKeysSet(true), 1000)
	}

	function handleDecrypt() {
		if (
			message.serverMessage !==
				caesarShift(receivedMessage.receivedFromServer, -keys.fullKey.c[0]) &&
			receivedMessage
		) {
			setIsOpen(true)
			return
		}
		let decryptedMessage = caesarShift(
			receivedMessage.receivedFromServer,
			-keys.fullKey.c[0]
		)
		setReceivedMessage({
			...receivedMessage,
			receivedFromServer: decryptedMessage
		})
		setIsDecrypted(p => !p)
	}

	return (
		<div className="client-messenger-container ">
			<div className="client__message-section-container">
				<input
					disabled={!isAllKeysSet}
					className="client__message"
					placeholder="Enter message..."
					value={message.clientMessage}
					onChange={e =>
						setMessage({ ...message, clientMessage: e.target.value })
					}
				/>
				<button
					disabled={!isAllKeysSet}
					className="client__messenger-btn"
					onClick={handleEncryptAndSend}
				>
					Encrypt
					<br />
					and send
				</button>
				<FontAwesomeIcon
					icon={faLock}
					className={
						isEncrypted ? 'client__icon-lock' : 'client__icon-lock active'
					}
				/>
			</div>

			<div className="client__message-section-container">
				<input
					className="client__message"
					readOnly
					placeholder="Recieved message"
					value={receivedMessage.receivedFromServer}
				/>
				<button
					disabled={!isAllKeysSet}
					className="client__messenger-btn"
					onClick={handleDecrypt}
				>
					Decrypt
				</button>
				<FontAwesomeIcon
					icon={faUnlockKeyhole}
					className={
						isDecrypted ? 'client__icon-unlock' : 'client__icon-unlock active'
					}
				/>
			</div>
		</div>
	)
}

export default ClientMessenger
