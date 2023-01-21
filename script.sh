echo '\n\n requesting all heroes'
curl localhost:3000/heroes

echo '\n\n requesting Xuxa'
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes/1

echo '\n\n Creating Chapolin'
curl --silent -X POST \
    --data-binary '{ "name": "Chapolin", "age": 80, "power": "weakness"}' \
    localhost:3000/heroes