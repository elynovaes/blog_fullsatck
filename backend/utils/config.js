require('dotenv').config()
const { google } = require('googleapis');

const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

/* ******************** Setup GoogleDrive *************************** */
const credentials = require('../credentials.json');
const scopes = [
  'https://www.googleapis.com/auth/drive'
];
const auth = new google.auth.JWT(
  credentials.client_email, null,
  credentials.private_key, scopes
);
const drive = google.drive({ version: "v3", auth });

/* ****************************************************************** */

module.exports = {
  PORT,
  MONGODB_URI,
  drive
}