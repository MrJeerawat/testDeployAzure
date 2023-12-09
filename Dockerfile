FROM node:alpine3.18
WORKDIR /app
COPY . .
ENV PATH /app/node_module/.bin:$PATH
RUN npm i
CMD ["npm","start"]
