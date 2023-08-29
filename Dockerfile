FROM node:19-alpine AS node

# Builder stage
FROM node AS builder

WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
COPY prisma ./prisma/
COPY yarn.lock ./ 

RUN yarn

COPY . .

RUN yarn build

# Final stage
FROM node AS final


CMD [ "yarn", "start:migrate:prod" ]

