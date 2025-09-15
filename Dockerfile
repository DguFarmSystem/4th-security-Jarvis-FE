# 1. Node.js 환경에서 애플리케이션 빌드
FROM node:18 AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install --legacy-peer-deps

# 애플리케이션 소스 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# 2. 경량 Node.js 환경에서 HTTPS 서버 실행
FROM node:18-slim

# 작업 디렉토리 설정
WORKDIR /app

# 빌드된 파일 복사
COPY --from=builder /app/build ./build

# 필요한 Node.js 패키지 설치 (serve 사용)
RUN npm install -g serve

# 환경 변수 설정
ENV NODE_ENV=production

# 컨테이너가 실행될 때 HTTPS 서버 실행
CMD ["serve", "-s", "build", "-l", "3000", "--ssl-cert", "/etc/keys/fullchain.pem", "--ssl-key", "/etc/keys/privkey.pem"]