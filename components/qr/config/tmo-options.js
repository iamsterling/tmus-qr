background-image: tmobile-svg, 100%





var options = {
		// ====== Basic
		text: {qrData},
		width: 256,
		height: 256,
		colorDark : "#e20074",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.L, // H, M, Q, H

		// ====== dotScale
		dotScale: 0.5, // For body block, must be greater than 0, less than or equal to 1. default is 1
    /*
		dotScaleTiming: 1, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
		dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
		dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1

		dotScaleA: 1, // Dafault for alignment block, must be greater than 0, less than or equal to 1. default is 1
		dotScaleAO: undefined, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
		dotScaleAI: undefined, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1
		*/

		// ====== Backgroud Image

		backgroundImage: '', // Background Image
		backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1.
		/*
    autoColor: false, // Automatic color adjustment(for data block)
        autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
        autoColorLight: "rgba(255, 255, 255, .7)", // Automatic color: light CSS color
    */

		// ====== Colorful
		// === Posotion Pattern(Eye) Color
		/*
		PO: '#e1622f', // Global Posotion Outer color. if not set, the defaut is `colorDark`
		PI: '#aa5b71', // Global Posotion Inner color. if not set, the defaut is `colorDark`
		PO_TL:'', // Posotion Outer color - Top Left
		PI_TL:'', // Posotion Inner color - Top Left
		PO_TR:'', // Posotion Outer color - Top Right
		PI_TR:'', // Posotion Inner color - Top Right
		PO_BL:'', // Posotion Outer color - Bottom Left
		PI_BL:'', // Posotion Inner color - Bottom Left
		*/
		// === Alignment Color
		/*
		AO: '', // Alignment Outer. if not set, the defaut is `colorDark`
		AI: '', // Alignment Inner. if not set, the defaut is `colorDark`
		*/
		// === Timing Pattern Color
		/*
		timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
		timing_H: '', // Horizontal timing color
		timing_V: '', // Vertical timing color
		*/

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
