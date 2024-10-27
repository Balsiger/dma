#!/bin/bash

for file in *.ascii; do
  grep -q "Player's Handbook" "$file" && mv "$file" "Moved/Player's Handbook"
done
