FROM nginx
RUN apt-get update \
    && apt-get install -y net-tools iputils-ping telnet curl
EXPOSE 80
VOLUME /tmp/shared_logs