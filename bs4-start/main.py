from bs4 import BeautifulSoup
import requests

response = requests.get(url="https://news.ycombinator.com/")
web_page = response.text

soup = BeautifulSoup(web_page, "html.parser")
articles = soup.find_all(name="a", class_="storylink")

article_texts = []
article_links = []

for article_tag in articles:
    article_text = article_tag.get_text()
    article_link = article_tag.get("href")
    article_texts.append(article_text)
    article_links.append(article_link)

article_upvotes = [int(score.getText().split()[0]) for score in soup.find_all(name="span", class_="score")]

max_upvote = max(article_upvotes)
index = article_upvotes.index(max_upvote)
print(index)

print(article_texts[index + 1])
print(article_links[index + 1])
# print(article_upvotes)
