FROM node

WORKDIR /node-site

#npm install can take a while, cache this earlier in the docker build process
RUN npm install --silent
COPY package.json tsconfig.json tslint.json /node-site/
COPY server /node-site/server/
COPY static /node-site/static/
COPY node_modules /node-site/node_modules/
EXPOSE 3000


CMD npm run start
