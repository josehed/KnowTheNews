#!/bin/sh

while IFS='='  read -r first second ; do

	if [ "$first" = "MONGO_USERNAME" ]
	then
		user="$second"
	fi
	if [ "$first" = "MONGO_PASSWORD" ]
	then
		password="$second"
	fi
done < .env



docker-compose up -d

docker exec -i db sh  -c " mongoimport -u $user -p $password --authenticationDatabase admin -c test_collection -d db --jsonArray" < twitter_info.json

docker exec -i db sh  -c " mongoimport -u $user -p $password --authenticationDatabase admin -c paper_answer_collection -d db --jsonArray" < paper_answer_info.json
