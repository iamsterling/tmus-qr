# establish base image & update node
# ------------------
FROM arm64v8/node:alpine
RUN npm install -g npm@latest

# create & set working directory
# ------------------
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy package.json and install node modules
# ------------------
COPY package.json /usr/src
RUN npm install --quiet

# copy source code
# ------------------
COPY . .

# start app
# ------------------
EXPOSE 3000
CMD npm run dev
