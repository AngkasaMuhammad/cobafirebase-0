/*
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

const firebaseConfig = {
	databaseURL: "https://datakarepku-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
*/
export default async function handler(req, res) {
	const value = (Math.random()-.5)*999)
	try{
		let setvalue = await set(ref(database, 'aa'), value)
		console.log('Float written successfully: '+value)
		res.status(200).json({ value: randomFloat })
	}catch(e){
		console.error('Gagal writing float: ', e,)
		res.status(500).json({ error: 'gagal upload' })
	}
}
