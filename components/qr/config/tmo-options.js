var options = {
		// ====== Basic
		text: "BEGIN:VCARD\r\nVERSION:4.0\r\nN:Sterling Holt;;;\r\nORG:T-Mobile\r\nTITLE:Mobile Expert\r\nADR;DOM;PARCEL;HOME:;;880 S Preston Rd #40;Prosper;TX;75078;USA.\r\nEMAIL;INTERNET:james.holt28@t-mobile.com\r\nTEL;CELL:972-469-0082\r\nEND:VCARD",,
		width: 250,
		height: 250,
		colorDark : "#e20074",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.L, // H, M, Q, H

		// ====== dotScale
		dotScale: 0.4, // For body block, must be greater than 0, less than or equal to 1. default is 1

		dotScaleTiming: 0.1, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
		/*dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
		dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1
		*/

		dotScaleA: 0.1, // Dafault for alignment block, must be greater than 0, less than or equal to 1. default is 1
		dotScaleAO: 0.6, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
		dotScaleAI: 1, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1


		// ====== Backgroud Image

		backgroundImage: 'tmologo.svg', // Background Image
		backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1.
		autoColor: true, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
        autoColorLight: "rgba(255, 255, 255, .6)", // Automatic color: light CSS color

		// ===== Event Handler
		/*
		onRenderingStart: undefined,
		*/

		// ==== Images format
		/*
		format: 'PNG', // 'PNG', 'JPG'
		compressionLevel: 6, // ZLIB compression level (0-9). default is 6
		quality: 0.75, // An object specifying the quality (0 to 1). default is 0.75. (JPGs only)
		*/

		// ==== Versions
		/*
		version: 0, // The symbol versions of QR Code range from Version 1 to Version 40. default 0 means automatically choose the closest version based on the text length.
		*/

		// ===== Binary(hex) data mode
		/*
		binary: false // Whether it is binary mode, default is text mode.
		*/
}
