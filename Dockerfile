FROM node:18.13.0-bullseye-slim

WORKDIR /app

COPY ["./client/package*.json", "./"]

RUN npm i

COPY ./client .

# CMD [ "npm", "start" ]