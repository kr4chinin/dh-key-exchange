import './DecryptWarning.css'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

const DecryptWarning = ({ isOpen, setIsOpen }) => {
	useEffect(() => {
		const closeOnEscapeKey = e => {
			if (e.key === 'Escape') return setIsOpen(false)
		}
		document.body.addEventListener('keydown', closeOnEscapeKey)
		return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
	}, [setIsOpen])

	return createPortal(
		<div
			className={!isOpen ? 'modal' : 'modal active'}
			onClick={() => setIsOpen(false)}
		>
			<div
				className={!isOpen ? 'modal__content' : 'modal__content active'}
				onClick={e => e.stopPropagation()}
			>
				<div className="close-icon-container">
					<FontAwesomeIcon
						className="close-icon"
						icon={faXmark}
						onClick={() => setIsOpen(false)}
					/>
				</div>
				<p>
					<span className="warning-text">Warning!</span> Already decrypted!
				</p>
			</div>
		</div>,
		document.getElementById('warning-portal')
	)
}

export default DecryptWarning
