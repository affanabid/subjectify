# scrapers/blog.py
from duckduckgo_search import DDGS, exceptions
import time

def fetch_blog_articles(query, num_results=10):
    articles = []
    try:
        with DDGS() as ddgs:
            results = ddgs.text(keywords=query, max_results=num_results)
            for result in results:
                articles.append({
                    'title': result.get('title'),
                    'url': result.get('href')
                })
                time.sleep(1)

        return {
            "status": "success",
            "results": articles
        }

    except exceptions.RatelimitException:
        return {
            "status": "partial_success",
            "message": "Blog results are temporarily unavailable due to search rate limiting. Please try again in a few moments.",
            "results": []
        }

    except Exception as e:
        # Log the full error internally, but return a clean message to the frontend
        print(f"[ERROR] Blog fetch failed: {str(e)}")
        return {
            "status": "error",
            "message": "An unexpected error occurred while fetching blog articles. Please try again later.",
            "results": []
        }
