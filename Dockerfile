FROM node

RUN mkdir /home/root 

WORKDIR /home/root

COPY ./ /home/root

RUN yarn

ENTRYPOINT ["yarn", "start", "--host", "0.0.0.0"]
