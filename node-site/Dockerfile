FROM node

WORKDIR /node-site

#npm install can take a while, cache this earlier in the docker build process
COPY package.json tsconfig.json tslint.json /node-site/
COPY server /node-site/server/
COPY static /node-site/static/
RUN apt-get update && apt-get install -y iputils-ping
RUN npm install --silent
EXPOSE 3000 
CMD npm run start
