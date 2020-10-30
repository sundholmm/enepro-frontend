#!/bin/bash

# This tool will convert all the png & jpg images in /public to webP format

for filename in ../public/*; do
    if [[ "$filename" =~ \.png|.jpg$ ]] && [[ ! -e "${filename%.*}".webp ]];
        then
            echo "Converting "${filename##*/}" to webP"

            # Check for the OS and use executable depending on it
            if [[ "$OSTYPE" == "msys"* ]]; then
            ./cwebp.exe "${filename}" -quiet -o "${filename%.*}".webp
            elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            ./cwebp "${filename}" -quiet -o "${filename%.*}".webp
            fi

            echo "Finished converting "${filename##*/}" to webP"
    fi
done