FROM node:18.13.0-bullseye-slim

WORKDIR /app

COPY ["./package*.json", "./"]

RUN npm i

COPY [".", "."]

COPY ["../*env", "."]

# CMD [ "npm", "start" ]