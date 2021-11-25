FROM node:16

WORKDIR /abhyas

COPY package.json /abhyas/

RUN npm install

COPY . /abhyas/

RUN npm run build

CMD [ "npm","start" ]

