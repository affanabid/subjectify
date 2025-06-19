from fastapi import APIRouter, Query
from scrapers import github, images, youtube, blog

router = APIRouter(prefix="/api", tags=["Scraping"])

@router.get("/github")
def get_github_repos(query: str = Query(..., min_length=1)):
    result = github.search_github_repos(query)
    return result

@router.get("/roadmaps")
def get_roadmap_images(query: str = Query(..., min_length=1)):
    result = images.scrape_roadmap_images(query)
    return result

@router.get("/youtube")
def get_youtube_playlists(query: str = Query(..., min_length=1)):
    result = youtube.fetch_youtube_resources(query)
    return result

@router.get("/blogs")
def get_blog_articles(query: str = Query(..., min_length=1)):
    result = blog.fetch_blog_articles(query)
    return result
