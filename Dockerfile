FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install nodemon -g && npm install -g db-migrate && npm install 

COPY ./ /app

EXPOSE 3000

CMD ["nodemon", "server.js"]
