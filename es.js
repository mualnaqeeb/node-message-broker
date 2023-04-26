const amqp = require('amqplib');
const elasticsearch = require('elasticsearch');

const esClient = new elasticsearch.Client({
  host: process.env.ELASTICSEARCH_HOST || 'localhost:9200',
});

async function consume() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'my_queue';

  await channel.assertQueue(queue);

  console.log('Waiting for messages...');

  channel.consume(queue, async (message) => {
    const data = JSON.parse(message.content.toString());
    const timestamp = new Date().toISOString();

    await esClient.index({
      index: 'my_index',
      body: {
        ...data,
        timestamp,
      },
    });

    console.log(`Indexed message with id ${data.id}`);
    channel.ack(message);
  });
}

consume();
