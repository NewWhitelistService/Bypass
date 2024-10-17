// Initialize an array to hold HWIDs
let hwids = []; // This will store the HWIDs (for demonstration purposes)

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { hwid } = req.body; // Get HWID from the request body
        
        if (hwid) {
            // Add HWID to the list if it doesn't already exist
            if (!hwids.includes(hwid)) {
                hwids.push(hwid); // Add the new HWID
            }
            res.status(204).send(); // Send a No Content response (no additional message)
        } else {
            res.status(400).send('HWID is required.'); // If HWID is missing
        }
    } else if (req.method === 'GET') {
        // Join the HWIDs into a single string separated by new lines
        const responseBody = hwids.join('\n'); 
        res.status(200).send(responseBody); // Respond with the list of HWIDs
    } else {
        // Handle non-POST or non-GET requests
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
