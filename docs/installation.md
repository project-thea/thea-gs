---
sidebar_position: 1
---

# Installation

THEA-GS is an  open-source digital contact tracing system that was born out of the [Project-THEA](https://project-thea.org/) whose focus was  the haulage industry. 
The tool is designed to combine anonymized time-stamped geo-location information relative to the road infrastructure with COVID-19 test results to support public health efforts to limit transmission and the safe reopening of economies.


## Requirements

The minimum requirement for this project is your Web server supports PHP 7.3.0 and you have 
Node.js a javascript runtime environment installed locally on your computer. 

## Installation steps


### Install via Git 

Clone the repo locally:

```sh
git clone https://github.com/project-thea/project-thea-server.git

cd project-thea-api

```

### Install PHP dependencies:

```sh
composer install
```

### Install NPM dependencies:

```sh
npm install
```

### Build assets: 

```sh
npm run dev
```

CONFIGURATION
------------

### Setup configuration:

```sh
cp .env.example .env
```

### Generate application key:

```sh
php artisan key:generate
```

### Create a database:

```sql
CREATE DATABASE DB_DATABASE;
```

### Update .env with database details:

```sh
DB_CONNECTION=<DB_CONNECTION>
DB_HOST=<DB_HOST>
DB_PORT=<DB_PORT>
DB_DATABASE=<DB_DATABASE>
DB_USERNAME=<DB_USERNAME>
DB_PASSWORD=<DB_PASSWORD>
```

### Run database migrations:

```sh
php artisan migrate
```

### Run database seeders:

```sh
php artisan db:seed
```

### Start instance of Valhalla

Start an instance of the Valhalla service and update the  VALHALLA_HOST environment variable in the 
.env file

### Run development server:

```sh
php artisan serve
```