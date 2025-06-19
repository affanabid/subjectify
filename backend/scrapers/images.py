# scrapers/images.py
import os
import requests
from duckduckgo_search import DDGS, exceptions

def scrape_roadmap_images(query, limit=5, save_images=False, save_dir="downloaded_images"):
    if save_images and not os.path.exists(save_dir):
        os.makedirs(save_dir)

    results = []
    try:
        with DDGS() as ddgs:
            for r in ddgs.images(keywords=f"{query} roadmap", max_results=limit):
                image_url = r.get("image")
                title = r.get("title")

                image_data = {
                    "title": title,
                    "image_url": image_url,
                }

                if save_images:
                    try:
                        img_data = requests.get(image_url).content
                        img_name = f"{title[:30]}.jpg"
                        img_path = os.path.join(save_dir, img_name)

                        with open(img_path, 'wb') as f:
                            f.write(img_data)

                        image_data["image_path"] = img_path
                    except Exception as e:
                        image_data["error"] = f"Failed to download image: {str(e)}"

                results.append(image_data)

        return {"status": "success", "results": results}

    except exceptions.RatelimitException:
        # Return empty results with friendly message
        return {
            "status": "partial_success",
            "message": "Image results are temporarily unavailable due to rate limiting. Please try again later.",
            "results": []
        }
