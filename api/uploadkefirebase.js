// api/randomFloat.js
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Use default credentials
    databaseURL: 'https://datakarepku-default-rtdb.firebaseio.com', // Replace with your database URL
  });
}

export default async function handler(req, res) {
  const randomFloat = Math.random(); // Generate a random float
  const db = admin.database();
  const ref = db.ref('aa'); // Path in your Realtime Database

  try {
    await ref.push({ value: randomFloat, timestamp: Date.now() });
    console.log('Random float written:', randomFloat);
    res.status(200).json({ value: randomFloat });
  } catch (error) {
    console.error('Error writing to database:', error);
    res.status(500).json({ error: 'Failed to write to database' });
  }
}
