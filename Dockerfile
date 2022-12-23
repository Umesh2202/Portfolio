FROM node:alpine

ENV NODE_ENV development

WORKDIR /portfolio

COPY . /package.json /portfolio/

#Installing dependencies
RUN npm install

COPY . .

CMD [ "npm", "start" ]