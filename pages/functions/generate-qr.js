import QRCode from 'easyqrcodejs-nodejs';
import qr-option



export default function GenerateVCard() {
	// Options
	var options = {
		text: "www.easyproject.cn/donation"
	};

	// New instance with options
	var qrcode = new QRCode(options);

	// Save QRCode image
	qrcode.saveImage({
		path: 'q.png' // save path
	});
}
