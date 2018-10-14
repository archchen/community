# nodebb with docker-comose

## System Requirements

1. docker
2. docker-compose (v3+)

## Deploy

``` shell
$ git clone https://github.com/LearnSolid/nodebb
$ cd nodebb
$ sudo docker network create nodebb_net
$ sudo docker-compose up -d
```