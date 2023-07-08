const config  = require('../config') ; 
const { OAuth2Client } = require("google-auth-library");
const { google } = require("googleapis");

const CLIENT_ID = config.oauth.CLIENT_ID
const CLIENT_SECRET = config.oauth.CLIENT_SECRET
const REDIRECT_URI = config.oauth.REDIRECT_URI ; 

const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);







async function moveEmailToFolder({messageId}) {
    try {
        await client.setCredentials({ access_token: config.tokens.access_token });  

    const gmail = google.gmail({ version: 'v1', auth: client });


    await gmail.users.messages.modify({
      userId: 'me',
      id: messageId,
      requestBody: {
        addLabelIds: ['Label_8850915919906712834'],
        removeLabelIds: ['UNREAD'],
      },
    });

    console.log('Email moved to the custom folder successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}



module.exports = moveEmailToFolder ;



