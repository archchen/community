# nodebb with docker-comose

## System Requirements

1. docker
2. docker-compose (v3+)

## Deploy

You must first modify the database password in the ```configs.json```, otherwise there will be potential security issues.

``` shell
$ git clone https://github.com/LearnSolid/nodebb
$ cd nodebb
$ sudo docker network create nodebb_net
$ sudo docker-compose up -d
```

Then you can visit ```http://YOUR_HOST:8081``` to install nodebb.

## Configs

If you need to modify the port number, data mount directory and other information, please modify docker-compose.yml.
