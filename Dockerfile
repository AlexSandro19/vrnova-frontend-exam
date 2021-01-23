FROM node:alpine
WORKDIR /usr/app/front/public
EXPOSE 8081
COPY ./ ./
RUN npm install
CMD ["npm", "start"]


