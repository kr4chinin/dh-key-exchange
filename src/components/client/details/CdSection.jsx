import React from 'react'
import './details.css'
import { useClientKeys } from '../../../context/KeysContext'

const CdSection = () => {
	const { keys } = useClientKeys()

	const isAllKeysSet =
		keys.publicKey && keys.privateKey && keys.partialKey && keys.fullKey

	return (
		<div className="cd-section">
			<div className="cd-rom">
				<div className={!isAllKeysSet ? 'cd' : 'cd set'} />
			</div>
			<div
				className={!isAllKeysSet ? 'light-indicator' : 'light-indicator set'}
			/>
		</div>
	)
}

export default React.memo(CdSection)
