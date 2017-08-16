FROM mhart/alpine-node:8.4

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 1234
CMD [ "node", "." ]