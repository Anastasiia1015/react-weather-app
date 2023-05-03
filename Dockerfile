FROM node:19.5.0

WORKDIR /usr/src/app/my-app

COPY package*.json ./  
COPY ./src ./src
COPY ./public ./public
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]