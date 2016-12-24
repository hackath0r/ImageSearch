### Script for indexing all the images by reading urls from a file

import sys
from clarifai import rest
from clarifai.rest import ClarifaiApp
from clarifai.rest import Image as ClImage

# get clarifai app instance
app = ClarifaiApp()

# use general model for generating tags for images
model = app.models.get('general-v1.3')

# get urls from 'urls' file
url_list = [line.rstrip('\n') for line in open('urls')]

# remove repeating urls 
url_list = list(set(url_list))

url_list_length = len(url_list)

# url counter
N = 1

# Iterate over all the links and bulk index them in batches of 128 images
while N <= url_list_length:
    images = []
    for i in range(N, N+128):
        if i <= url_list_length:
            images.append(ClImage(url=url_list[i-1], image_id=str(i)))

    #print(images)
    #print(len(images))
    app.inputs.bulk_create_images(images)
    N = N+128
