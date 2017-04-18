#!/bin/bash
for i in `seq 10`
do
  curl -D - http://node-site.bailey-jones.com/
  curl -D - http://flask-site.bailey-jones.com/
done

