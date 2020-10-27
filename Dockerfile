FROM node:10-alpine

# Metadata Information
LABEL Name='server-template'
LABEL maintener='example@example.com'
LABEL version='1.0'

# workspace directory
WORKDIR /usr/src/server

# Install packages
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

# Copy the App
COPY . .

ENV NODE_ENV=production

EXPOSE 5000

CMD yarn start:prod