export default function handler(req, res) {
    if (req.method === 'POST') {
        const { hwid } = req.body; // Get the HWID from the request body

        // Respond with the received HWID or any response data
        res.status(200).json({ received: hwid });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
