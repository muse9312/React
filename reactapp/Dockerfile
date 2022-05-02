FROM node:16.14.2-alpine3.15
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --force --production

COPY . .

CMD [ "npm", "start" ]