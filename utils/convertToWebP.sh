#!/bin/bash

# This tool will convert all the png & jpg images in /public to webP format

for filename in ../public/*; do
    if [[ "$filename" =~ \.png|.jpg$ ]] && [[ ! -e "$filename" ]];
        then
            echo "Converting "${filename##*/}" to webP"

            # Check for the OS and use executable depending on it
            if [[ "$OSTYPE" == "msys"* ]]; then
            ./cwebp.exe "${filename}" -q 100 -lossless -quiet -o "${filename%.*}".webp
            elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            ./cwebp "${filename}" -q 100 -lossless -quiet -o "${filename%.*}".webp
            fi

            echo "Finished converting "${filename##*/}" to webP"
            echo "Removing original "${filename##*/}" now"
            rm -f "$filename"
            echo "Removed original "${filename##*/}""
            echo ""
    fi
done