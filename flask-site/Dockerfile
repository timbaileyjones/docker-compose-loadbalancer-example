#FROM python:3-onbuild
FROM ubuntu:latest
RUN apt-get update \
    && apt-get install -y python python-pip 
COPY . /app
RUN cd /app \
    && pip install --upgrade pip \
    && pip install -r requirements.txt
EXPOSE 8080
VOLUME /tmp/shared_logs
CMD python /app/flask-site.py
