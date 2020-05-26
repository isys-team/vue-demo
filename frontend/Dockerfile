FROM node:12.16.3-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run", "serve"]