import vcard from 'vcards-js';
import Forms from 'react-bootstrap/Forms';
import Button from 'react-bootstrap/Button';

//create a new vCard

export default function GenerateVCard() {

  var vCard = vCardsJS();

  const create vCardOutput (
    <Button>
    Does this work?
    </Button>
  );

  }

  //set basic properties shown before
  vCard.firstName = 'Eric';
  vCard.lastName = 'Nesser';
  vCard.uid = '69531f4a-c34d-4a1e-8922-bd38a9476a53';
  vCard.isOrganization = true;
  vCard.organization = 'ACME Corporation';

  //link to image
  vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');

  //or embed image
  vCard.photo.attachFromUrl('/path/to/file.jpeg');

  vCard.workPhone = '312-555-1212';
  vCard.birthday = new Date(1985, 0, 1);
  vCard.title = 'Software Developer';
  vCard.url = 'https://github.com/enesser';
  vCard.workUrl = 'https://acme-corporation/enesser';
  vCard.note = 'Notes on Eric';

  //set other vitals
  vCard.nickname = 'Scarface';
  vCard.namePrefix = 'Mr.';
  vCard.nameSuffix = 'JR';
  vCard.gender = 'M';
  vCard.anniversary = new Date(2004, 0, 1);
  vCard.role = 'Software Development';

  //set other phone numbers
  vCard.homePhone = '312-555-1313';
  vCard.cellPhone = '312-555-1414';
  vCard.pagerPhone = '312-555-1515';

  //set fax/facsimile numbers
  vCard.homeFax = '312-555-1616';
  vCard.workFax = '312-555-1717';

  //set email addresses
  vCard.email = 'e.nesser@emailhost.tld';
  vCard.workEmail = 'e.nesser@acme-corporation.tld';

  //set logo of organization or personal logo (also supports embedding, see above)
  vCard.logo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');

  //set URL where the vCard can be found
  vCard.source = 'http://mywebpage/myvcard.vcf';

  //set address information
  vCard.homeAddress.label = 'Home Address';
  vCard.homeAddress.street = '123 Main Street';
  vCard.homeAddress.city = 'Chicago';
  vCard.homeAddress.stateProvince = 'IL';
  vCard.homeAddress.postalCode = '12345';
  vCard.homeAddress.countryRegion = 'United States of America';

  vCard.workAddress.label = 'Work Address';
  vCard.workAddress.street = '123 Corporate Loop\nSuite 500';
  vCard.workAddress.city = 'Los Angeles';
  vCard.workAddress.stateProvince = 'CA';
  vCard.workAddress.postalCode = '54321';
  vCard.workAddress.countryRegion = 'United States of America';

  //set social media URLs
  //vCard.socialUrls['facebook'] = 'https://...';
  //vCard.socialUrls['linkedIn'] = 'https://...';
  vCard.socialUrls['twitter'] = 'https://...';
  //vCard.socialUrls['flickr'] = 'https://...';
  //vCard.socialUrls['custom'] = 'https://...';

  //you can also embed photos from files instead of attaching via URL
  //vCard.photo.embedFromFile('photo.jpg');
  //vCard.logo.embedFromFile('logo.jpg');

  vCard.version = '4.0'; //can also support 2.1 and 4.0, certain versions only support certain fields

  //save to file
  vCard.saveToFile('./eric-nesser.vcf');


  //get as formatted string
  console.log(vCard.getFormattedString());

  render (
    <>
      <VCardOutput></VCardOutput>
    </>
  )
};
