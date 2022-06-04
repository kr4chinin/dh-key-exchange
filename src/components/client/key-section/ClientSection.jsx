import './ClientSection.css'
import { useClientKeys } from '../../../context/KeysContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'

const ClientSection = ({ keyType, isDisabled, setIsDisabled }) => {
	const {
		keys,
		getPublicKey,
		getPrivateKey,
		getPartialKey,
		getFullKey,
		isPartialDisabled,
		isFullDisabled
	} = useClientKeys()

	switch (keyType) {
		case 'Public key': {
			const isPublicSet = keys.publicKey
			return (
				<div className="client__key-section">
					<FontAwesomeIcon
						icon={faKey}
						className={!isPublicSet ? 'check-icon' : 'check-icon set'}
					/>
					<div className="client__description">{keyType}</div>
					<textarea
						className="client__value"
						disabled
						value={keys.publicKey}
					/>
					<button
						disabled={isDisabled}
						className="client__get-btn"
						onClick={getPublicKey}
					>
						Generate
					</button>
				</div>
			)
		}
		case 'Private key': {
			const isPrivateSet = keys.privateKey
			return (
				<div className="client__key-section">
					<FontAwesomeIcon
						icon={faKey}
						className={!isPrivateSet ? 'check-icon' : 'check-icon set'}
					/>
					<div className="client__description">{keyType}</div>
					<textarea
						className="client__value"
						disabled
						value={keys.privateKey}
					/>
					<button
						disabled={isDisabled}
						className="client__get-btn"
						onClick={getPrivateKey}
					>
						Generate
					</button>
				</div>
			)
		}
		case 'Partial key': {
			const isPartialSet = keys.partialKey
			return (
				<div className="client__key-section">
					<FontAwesomeIcon
						icon={faKey}
						className={!isPartialSet ? 'check-icon' : 'check-icon set'}
					/>
					<div className="client__description">{keyType}</div>
					<textarea
						className="client__value"
						disabled
						value={keys.partialKey}
					/>
					<button
						className="client__get-btn"
						disabled={isPartialDisabled}
						onClick={() => {
							getPartialKey()
							setIsDisabled(true)
						}}
					>
						Calculate
					</button>
				</div>
			)
		}
		case 'Full key': {
			const isFullSet = keys.fullKey
			return (
				<div className="client__key-section">
					<FontAwesomeIcon
						icon={faKey}
						className={!isFullSet ? 'check-icon' : 'check-icon set'}
					/>
					<div className="client__description">{keyType}</div>
					<textarea
						className="client__value"
						disabled
						value={keys.fullKey}
					/>
					<button
						className="client__get-btn"
						disabled={isFullDisabled}
						onClick={() => getFullKey()}
					>
						Calculate
					</button>
				</div>
			)
		}
		default:
			return new Error('Incorrect keyType property!')
	}
}

export default ClientSection
