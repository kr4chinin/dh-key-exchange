import { useServerKeys } from '../../../context/KeysContext'
import './ServerSection.css'

const ServerSection = ({ keyType, isDisabled, setIsDisabled }) => {
	const {
		keys,
		getPublicKey,
		getPrivateKey,
		getPartialKey,
		getFullKey,
		isPartialDisabled,
		isFullDisabled
	} = useServerKeys()

	switch (keyType) {
		case 'Public key': {
			const isPublicSet = keys.publicKey
			return (
				<div className="server__key-section">
					<div className={!isPublicSet ? 'bulb' : 'bulb set'}>
						<div
							className={!isPublicSet ? 'inner-bulb' : 'inner-bulb set'}
						></div>
					</div>
					<div className="server__description">{keyType}</div>
					<textarea
						className="server__value"
						disabled
						value={keys.publicKey}
					/>
					<button
						disabled={isDisabled}
						className="server__get-btn"
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
				<div className="server__key-section">
					<div className={!isPrivateSet ? 'bulb' : 'bulb set'}>
						<div
							className={!isPrivateSet ? 'inner-bulb' : 'inner-bulb set'}
						></div>
					</div>
					<div className="server__description">{keyType}</div>
					<textarea
						className="server__value"
						disabled
						value={keys.privateKey}
					/>
					<button
						disabled={isDisabled}
						className="server__get-btn"
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
				<div className="server__key-section">
					<div className={!isPartialSet ? 'bulb' : 'bulb set'}>
						<div
							className={!isPartialSet ? 'inner-bulb' : 'inner-bulb set'}
						></div>
					</div>
					<div className="server__description">{keyType}</div>
					<textarea
						className="server__value"
						disabled
						value={keys.partialKey}
					/>
					<button
						className="server__get-btn"
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
				<div className="server__key-section">
					<div className={!isFullSet ? 'bulb' : 'bulb set'}>
						<div className={!isFullSet ? 'inner-bulb' : 'inner-bulb set'}></div>
					</div>
					<div className="server__description">{keyType}</div>
					<textarea
						className="server__value"
						disabled
						value={keys.fullKey}
					/>
					<button
						className="server__get-btn"
						disabled={isFullDisabled}
						onClick={getFullKey}
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

export default ServerSection
