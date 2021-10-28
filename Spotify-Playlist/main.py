from bs4 import BeautifulSoup
import requests

CLIENT_ID = "4707f17e5c77434f89aa7711cf5553cd"
CLIENT_SECRET = "6144f05ece2c4e18afbed95470a23c0e"


year_input = input("Which year would you like to travel to? Type in the YYYY-MM-DD format: ")
URL = f"https://www.billboard.com/charts/hot-100/{year_input}"

response = requests.get(URL)
web_page = response.text

soup = BeautifulSoup(web_page, "html.parser")
song_title_spans = soup.find_all(name="span", class_="chart-element__information__song text--truncate color--primary")
song_titles = []
for spans in song_title_spans:
    song_titles.append(spans.string)

print(song_titles)


