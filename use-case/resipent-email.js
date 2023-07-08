const axios = require('axios');
const config = require('../config') ; 

const accessToken = config.tokens.access_token ; 

async function getSenderEmailFromMessageId({messageId}) {
  try {
    const params = {
      userId: 'me',
      id: messageId,
    };

    const response = await axios.get(
      `https://www.googleapis.com/gmail/v1/users/${params.userId}/messages/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    
    const senderEmail = response.data.payload.headers.find(header => header.name === 'From').value;

    console.log('Sender Email:', senderEmail);

    const emailString = 'Rehan Shaikh <rs0327884@gmail.com>';
    const emailRegex = /<([^>]+)>/;
    const matches = emailRegex.exec(senderEmail); 
    const email = matches ? matches[1] : '';

    console.log('Email:', email);

    return email ; 
  } catch (error) {
    console.error('Error:', error.response.data.error);
  }
}



module.exports = getSenderEmailFromMessageId;
