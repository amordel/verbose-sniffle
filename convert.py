#!/usr/bin/python3.5
# http://mtgjson.com/json/AllCards.json.zip
import json

f = open("AllCards.json", "r")
raw = f.read()
f.close()

data = json.loads(raw)

output = []

for k,v in data.items():
    output.append(k)

f = open("cards.json", "w")
f.write(json.dumps(output))
f.close()
