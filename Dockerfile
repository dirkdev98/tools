FROM node:18-alpine as deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx compas run generate

ENV NODE_ENV production

EXPOSE 3000
