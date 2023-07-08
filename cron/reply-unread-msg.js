const cron = require('node-cron');
const getUnreadMessages = require('../use-case/get-unread-msg') ; 
// cron.schedule('*/30 * * * * *', () => {
//     console.log('getting unread msgs');
//     getUnreadMessages() ; 
// });
