from duckduckgo_search import DDGS

def fetch_blog_articles(query, num_results=10):
    articles = []
    with DDGS() as ddgs:
        results = ddgs.text(keywords=query, max_results=num_results)
        for result in results:
            articles.append({
                'title': result.get('title'),
                'url': result.get('href')
            })
    return articles
