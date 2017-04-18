#!/bin/bash
for i in `seq 1000`
do
  curl -D - -X POST -H "Content-Type: application/json" -d '{"data":"good Tuesday morning '$i'"}' http://node-site.bailey-jones.com/api/data
  curl -D - -X POST -H "Content-Type: application/json" -d '{"data":"good Tuesday morning '$i'"}' http://flask-site.bailey-jones.com/api/data
done

