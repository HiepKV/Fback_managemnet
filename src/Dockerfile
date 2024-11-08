# Sử dụng image node
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Biên dịch project
RUN npm run build

# Mở cổng để truy cập
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "run", "start:prod"]
