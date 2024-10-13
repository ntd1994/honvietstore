module.exports = {
    apps: [
        {
            name: "hon_viet_store", // Tên ứng dụng của bạn
            script: "npm", // Lệnh chính là "npm"
            args: "run dev", // Tham số là "run dev" (chạy lệnh "npm run dev")
            watch: true, // Theo dõi các thay đổi file trong dự án
            env: {
            NODE_ENV: "development", // Biến môi trường cho chế độ development
            PORT: 8001 // Đặt port mặc định là 8001
            },
                env_production: {
                NODE_ENV: "production", // Biến môi trường cho chế độ production (nếu có)
            PORT: 8001 // Cũng thiết lập port mặc định là 8001 cho production
            }
        }
    ]
};