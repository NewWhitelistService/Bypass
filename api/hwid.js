// Khởi tạo một mảng để lưu trữ HWIDs
let hwids = []; // Mảng này sẽ lưu trữ HWIDs

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { hwid } = req.body; // Lấy HWID từ body của yêu cầu
        
        if (hwid) {
            // Thêm HWID vào danh sách nếu nó chưa tồn tại
            if (!hwids.includes(hwid)) {
                hwids.push(hwid); // Thêm HWID mới vào danh sách
            }
            res.status(204).send(); // Gửi phản hồi No Content (không có nội dung)
        } else {
            res.status(400).send('HWID is required.'); // Nếu thiếu HWID
        }
    } else if (req.method === 'GET') {
        // Kết hợp các HWID thành một chuỗi, ngăn cách bằng ký tự xuống dòng
        const responseBody = hwids.join('\n'); 
        res.status(200).send(responseBody); // Phản hồi với danh sách HWIDs
    } else {
        // Xử lý các yêu cầu không phải là POST hoặc GET
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
