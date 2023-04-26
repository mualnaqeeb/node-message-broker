
# Node.js Application for Ingesting Data from RabbitMQ, Indexing in Elasticsearch, and Exposing a REST API

This Node.js application ingests data from RabbitMQ, indexes the data in Elasticsearch, and exposes a REST API for querying the indexed data. The application is containerized using Docker and includes a Dockerfile for easy deployment. The Elasticsearch index is automatically created with appropriate mappings when the application starts up. The application is configured using environment variables, including the RabbitMQ connection details, Elasticsearch connection details, and any other configuration parameters that may be relevant.

  

## Prerequisites

* Node.js

* Docker

* RabbitMQ

* Elasticsearch

## Installation

1. Clone this repository.

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2. Install dependencies.

```bash
npm install
```
3. Set the required environment variables.

```bash
export RABBITMQ_HOST=your-rabbitmq-host
export RABBITMQ_PORT=your-rabbitmq-port
export RABBITMQ_USERNAME=your-rabbitmq-username
export RABBITMQ_PASSWORD=your-rabbitmq-password
export ELASTICSEARCH_HOST=your-elasticsearch-host
export ELASTICSEARCH_PORT=your-elasticsearch-port
```
4. Start the application.
```bash
npm start
```
Alternatively, you can run the application in a Docker container. To do so, follow these steps:
1. Build the Docker image.
```bash
docker build -t your-image-name .
```
2. Run the Docker container.
```bash
docker run --name your-container-name \
-p 8080:8080 \
-e RABBITMQ_HOST=your-rabbitmq-host \
-e RABBITMQ_PORT=your-rabbitmq-port \
-e RABBITMQ_USERNAME=your-rabbitmq-username \
-e RABBITMQ_PASSWORD=your-rabbitmq-password \
-e ELASTICSEARCH_HOST=your-elasticsearch-host \
-e ELASTICSEARCH_PORT=your-elasticsearch-port \
-d your-image-name
```

## Usage

The REST API supports at least one endpoint for querying by keyword. You can send a GET request to /api/search with a q query parameter to search for data. For example:
```bash
curl -X GET http://localhost:8080/api/search?q=your-query
```
License

This project is licensed under the MIT License - see the LICENSE file for details.