export default function handler(req, res) {
    if (req.method === 'POST') {
        const message = req.query.send; // Get the 'send' query parameter
        res.status(200).json({ response: message }); // Respond with the message
    } else {
        res.setHeader('Allow', ['POST']); // Specify allowed methods
        res.status(405).end(`Method ${req.method} Not Allowed`); // Handle other methods
    }
}
