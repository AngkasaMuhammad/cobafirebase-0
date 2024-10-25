// api/randomFloat.js
export default async function handler(req, res) {
    const randomFloat = Math.random(); // Generate a random float
    // Here you can integrate with your database (e.g., Firebase)
    console.log('Random float:', randomFloat);

    // Respond to the request
    res.status(200).json({ value: randomFloat });
}
