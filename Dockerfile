FROM node:latest

RUN mkdir parse-dashboard

ADD . /parse-dashboard
WORKDIR /parse-dashboard
RUN npm install

ENV APP_ID no_quotes_appID
ENV MASTER_KEY no_quotes_matser_key
ENV SERVER_URL  no_quotes_url/mountPointForParseServer

# Optional
ENV APP_NAME appname

EXPOSE 4040

CMD [ "npm", "start" ]
