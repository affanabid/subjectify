from fastapi import APIRouter, Query
from scrapers import github, images

router = APIRouter(prefix="/api", tags=["Scraping"])

@router.get("/github")
def get_github_repos(query: str = Query(..., min_length=1)):
    result = github.search_github_repos(query)
    return result

@router.get("/roadmaps")
def get_roadmap_images(query: str = Query(..., min_length=1)):
    result = images.scrape_roadmap_images(query)
    return result
