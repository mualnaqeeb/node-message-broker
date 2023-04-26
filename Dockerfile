FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

ENV RABBITMQ_URL amqp://rabbitmq:5672
ENV ELASTICSEARCH_HOST elasticsearch:9200

CMD ["npm", "start"]
