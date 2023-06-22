
FROM node:18

WORKDIR /usr/src/app

# Install app dependencies, use wildecard to ensure that both package.json and package-lock.json are copied
COPY package*.json ./

RUN npm install

COPY . .

# Set the desired port in this case the development port
EXPOSE 3000
CMD [ "npm", "start" ]