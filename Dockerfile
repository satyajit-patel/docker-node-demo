FROM ubuntu

RUN apt update
RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt upgrade
RUN apt install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

RUN npm install

ENTRYPOINT ["node", "server.js"]