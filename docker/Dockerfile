FROM node:10.15.3-alpine 
MAINTAINER "Philips Healthcare"

ENV WORKDIR /rocc-device-scheduler-app

RUN mkdir -pv $WORKDIR

COPY dist $WORKDIR/dist
COPY node_modules $WORKDIR/node_modules
COPY package.json $WORKDIR/package.json
COPY client-start.sh $WORKDIR/client-start.sh

RUN chmod +x $WORKDIR/client-start.sh
RUN apk add --no-cache bash

WORKDIR $WORKDIR

EXPOSE 8080

CMD ["bash","/rocc-device-scheduler-app/client-start.sh"]
