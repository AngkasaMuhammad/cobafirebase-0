// api/randomFloat.js
export default async function handler(req, res) {
    const randomFloat = Math.random(); // Generate a random float
    // Here you can integrate with your database (e.g., Firebase)

    // Respond to the request
	let nama = [randomFloat,'satuuu','dua',]
	let i = 0
	let f = ()=>{
		let val = nama[i++]
		console.log('Random valueeee:', val);
		res.status(200).json({ value: val});
	}
	f()
    setTimeout(f,1111,)
    setTimeout(f,2222,)
}
