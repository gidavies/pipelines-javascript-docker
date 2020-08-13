'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.write('<H1>My Node App</H1>');
  res.write('<p>This is my extremely sophisticated Node Express app</p>');
  res.write('<H2>Source Code</H2>');
  res.write('<p>The source code, including Azure pipeline definition and kubernetes deployment files are in <a href="https://github.com/gidavies/pipelines-javascript-docker">GitHub</a></p>');
  res.write('<H2>Tools and Technology</H2>');
  res.write('<p>When a change is committed to the repo an <a href="https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops">Azure Pipeline</a> builds a Docker image');
  res.write(' and pushes it to an <a href="https://azure.microsoft.com/en-us/services/container-registry/">Azure Container Registry</a>.');
  res.write(' The Azure Pipeline then deploys the container image to <a href="https://azure.microsoft.com/en-us/services/kubernetes-service/">Azure Kubernetes Service</a>.</p>');
  res.write('<H2>Pipeline Status</H2>');
  res.write('<p><img src="https://dev.azure.com/gidavies/MyNodeApp/_apis/build/status/gidavies.pipelines-javascript-docker?branchName=master" alt="Pipeline Status"></img></p>');
  res.end()
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);