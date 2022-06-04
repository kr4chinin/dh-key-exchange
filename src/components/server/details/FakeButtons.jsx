import './details.css'
import React from 'react'
import { useServerKeys } from '../../../context/KeysContext'

const FakeButtons = () => {
	const { keys } = useServerKeys()

	const isAllKeysSet =
		keys.publicKey && keys.privateKey && keys.partialKey && keys.fullKey

	return (
		<div className="fake-btns-container">
			<div
				className={!isAllKeysSet ? 'fake-btn green' : 'fake-btn green set'}
			/>
			<div className={!isAllKeysSet ? 'fake-btn red' : 'fake-btn red set'} />
			<div
				className={
					!isAllKeysSet ? 'fake-btn darkgreen' : 'fake-btn darkgreen set'
				}
			/>
		</div>
	)
}

export default React.memo(FakeButtons)
