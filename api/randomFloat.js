// api/randomFloat.js
export default async function handler(req, res) {
    const randomFloat = Math.random(); // Generate a random float
    // Here you can integrate with your database (e.g., Firebase)
    console.log('Random float:', randomFloat);

    // Respond to the request
	let nama = [randomFloat,'satuuu','dua',]
	let i = 0
	let f = ()=>{
        res.status(200).json({ value: nama[i++]});
	}
    setTimeout(f,1111,)
    setTimeout(f,2222,)
    setTimeout(f,3333,)
}
