# Image Search
Search images by entering keyword.

![Image Search](http://i.imgur.com/xKPzBgr.png)

![Search Keyword](http://i.imgur.com/ELWUKSo.jpg)

## Scrape Image URLs
Run `python scrapeImageURLs.py > urls`

This script is going to fetch large number of image URLs and store it in a file named 'urls'. You can modify this script to extract image urls from other sources.

## Index images using Clarifai APIs
Run `python3 indexImages.py`

This script is going to index images with unique ids by fetching all URLs in 'urls file. Maximum number of images that can be uploaded in bulk is 128. Indexing large number of files is being handelled in the script by using batch uploading. 

## Run the app on localhost

Run a server on localhost for running the app. For example, you can use `python -m SimpleHTTPServer`. This is going to serve the page on `localhost:8000`.

Search for keywords to see image results. Images will appear, If the search keyword matches with the tags of indexed images.

![some result](http://i.imgur.com/aZfhA66.jpg)

![No Result](http://i.imgur.com/t9T1Bm8.png)

## Future improvements
* Image grid for different images sizes
* Pagination of search results
* Search suggestion


