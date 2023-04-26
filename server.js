const express = require('express');
const elasticsearch = require('elasticsearch');

const esClient = new elasticsearch.Client({
  host: process.env.ELASTICSEARCH_HOST || 'localhost:9200',
});

const app = express();

app.get('/search', async (req, res) => {
  const { q } = req.query;

  const results = await esClient.search({
    index: 'my_index',
    body: {
      query: {
        match: {
          message: q,
        },
      },
    },
  });

  res.json(results.hits.hits);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
