FROM node:9.10.0-alpine

RUN mkdir /home/app
WORKDIR /home/app

CMD TYPEORM_HOST=postgres.local yarn dev
