FROM node:24-alpine
WORKDIR /app

ENV DATABASE_URL="file:prod.db"

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "build/index.js"]
