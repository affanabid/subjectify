# scrapers/github.py
import requests

def search_github_repos(query, limit=5, token=None):
    headers = {}
    if token:
        headers["Authorization"] = f"token {token}"

    url = f"https://api.github.com/search/repositories?q={query}&sort=stars"
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        results = [
            {
                "name": repo["full_name"],
                "stars": repo["stargazers_count"],
                "url": repo["html_url"],
                "description": repo["description"]
            }
            for repo in data["items"][:limit]
        ]
        return {"status": "success", "results": results}
    else:
        return {"status": "error", "message": response.text}
