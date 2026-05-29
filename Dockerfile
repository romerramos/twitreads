FROM node:24-alpine
WORKDIR /app

ENV DATABASE_URL="file:prod.db"
ENV ORIGIN="http://209.38.37.201"

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build && npm run db:migrate

EXPOSE 3000
CMD ["node", "build/index.js"]
