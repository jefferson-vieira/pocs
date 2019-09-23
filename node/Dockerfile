FROM node:10-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD yarn build \
  && yarn start

EXPOSE 3000
