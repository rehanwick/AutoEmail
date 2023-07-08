const axios = require('axios');
const config = require('../config') ; 
const replyToEmail = require('./reply-to-message') ; 
const resipentEmail = require('./resipent-email') ; 
const modifyFolders = require('./remove-to-unread-folder') ; 
async function getUnreadMessages() {
  try {
    const accessToken = config.tokens.access_token; // Replace with the actual access token

    // Set the request parameters
    const params = {
      userId: 'me',
      q: 'is:unread'
    };

    // Make the API call to the Gmail API
    const response = await axios.get('https://www.googleapis.com/gmail/v1/users/me/messages', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: params
    });

    const messages = response.data.messages;
    if (messages) {
        for (const message of messages) {
          console.log('Message ID:', message.id);
          const email = await resipentEmail({messageId : message.id}) ; 
          await replyToEmail({messageId : message.id , recipientsEmail : email})
         await modifyFolders({messageId : message.id}); 
        }
    }
    else {
        console.log('No email Found !! ');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
getUnreadMessages() ; 
module.exports = getUnreadMessages ;
