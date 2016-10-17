FROM node:6
ENV PORT 9000
ENV HOST 0.0.0.0

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install dependencies
COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

VOLUME /usr/src/app

EXPOSE 9000

#Run the application
CMD ["npm", "start"]
