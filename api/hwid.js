export default function handler(req, res) {
    if (req.method === 'POST') {
        const { hwid } = req.body; // Get the HWID from the request body
        
        // Respond with just the HWID as a plain string
        res.status(200).send(hwid);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
