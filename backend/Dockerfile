FROM node:12.16.3-slim

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["nodemon", "app.js"]