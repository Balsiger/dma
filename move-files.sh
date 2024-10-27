#!/bin/bash

for file in *.ascii; do
  grep -q "Volo's Guide to Monsters" "$file" && mv "$file" "Moved/Volo's Guide to Monsters"
done
