import React, { useEffect } from 'react';
import classes from '../../override/GiftCard.css'

const GiftCardTemplate = props => {
	const {
		template, 
		amount,
		gcMessage,
		gcFrom,
		gcTo,
		activeImage,
		uploadedImages
	} = props
	const {
		barcode,
		code,
		from,
		to,
		note,
		image,
		message,
		logo, 
		title,
		value
	} = JSON.parse(template.design)

	let matches = JSON.parse(template.card).css.height.match(/(\d+)/); 
    const height = matches[0]
    const scale = 350/height
    const translateGiftcard = `-${((height - 350)/height)*50}%`

    const imageSrc = activeImage < template.images.length ? template.images[activeImage].src : uploadedImages

	const GiftcardImage = template.images.length != 0 && 	<div id={classes['preview-giftcard-image']} style={image.css} >
															 	<img src={imageSrc} alt={image.key} style={{maxWidth: '100%'}}/>
														 	</div>

	const GiftcardMessage = <div id={classes['preview-giftcard-message']} style={message.css}>
								<span>
					                <span>{gcMessage}</span>
					            </span>
							</div>
	
	const GiftcardValue = 	amount && 	<div id={classes['preview-giftcard-value']} style={value.css}>
											<span>
								                <span>${amount}</span>
								            </span>
										</div>
	
	const GiftcardTitle = 	template.title && 	<div id={classes['preview-giftcard-title']} style={title.css}>
													<span>
										                <span>{template.title}</span>
										            </span>
												</div>

	const GiftcardLogo = 	logo &&	<div id={classes['preview-giftcard-logo']} style={logo.css}>
										<img src={logo.src}/>
									</div>

	const GiftcardBarcode = barcode &&	<div id={classes['preview-giftcard-barcode']} style={barcode.css}>
											<img src='https://mp.pwa-commerce.com/static/version1611124918/frontend/Magento/luma/en_US/Mageplaza_GiftCard/images/barcode.png'/>
										</div>

	const GiftcardNote = note &&	<div id={classes['preview-giftcard-note']} style={note.css}>
										<span>
											<span>{note.label}</span>
										</span>
									</div>

	const GiftcardFrom =	from &&	<div id={classes['preview-giftcard-from']} style={from.css}>
										<span>
											<span>From: </span>
											<span>{gcFrom}</span>
										</span>
									</div>

	const GiftcardTo =	to &&	<div id={classes['preview-giftcard-to']} style={to.css}>
									<span>
										<span>To: </span>
										<span>{gcTo}</span>
									</span>
								</div>

	return (
		<div className={classes['giftcard-template-container-preview']}>
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
			<div className={classes['giftcard-template-preview']} 
				 style={{
				 	fontFamily: template.font,
				 	transform: `scale(${scale})`
				 }}>
				<div className={classes['preview-giftcard']} style={{...JSON.parse(template.card).css, ...{transform: `translateY(${translateGiftcard}`}}} >
					{GiftcardImage}
					{GiftcardMessage}
					{GiftcardValue}
					{GiftcardTitle}
					{GiftcardLogo}
					{GiftcardBarcode}
					{GiftcardNote}
					{GiftcardFrom}
					{GiftcardTo}
				</div>
			</div>
		</div>
	)
}

export default GiftCardTemplate