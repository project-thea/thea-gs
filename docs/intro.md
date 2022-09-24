---
sidebar_position: 1
---

# Introduction

THEA-GS is an  open-source digital contact tracing system that was born out of the [Project-THEA](https://project-thea.org/) whose focus was  the haulage industry. 
The tool is designed to combine anonymized time-stamped geo-location information relative to the road infrastructure with COVID-19 test results to support public health efforts to limit transmission and the safe reopening of economies.

# Quick installation
The THEA-Server can be started by using docker containers.

```
#clone project 
git clone git@github.com:project-thea/project-thea-server.git

cd project-thea-server

# Start the services
docker-compose up -d
```