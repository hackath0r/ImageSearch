from bs4 import BeautifulSoup
import urllib

for i in range(1,64):
    r = urllib.urlopen('http://all-free-download.com/free-photos/christmas-party_page_'+ str(i) + '.html').read()
    soup = BeautifulSoup(r)
    items = soup.find_all("div", class_="item")

    for item in items:
        print item.img['src']
