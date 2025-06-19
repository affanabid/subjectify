# scrapers/youtube.py
import requests
import os
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY", None)

def fetch_youtube_resources(query, limit=5):
    try:
        url = 'https://www.googleapis.com/youtube/v3/search'
        params = {
            'part': 'snippet',
            'q': query,
            'type': 'playlist',
            'maxResults': limit,
            'key': YOUTUBE_API_KEY
        }

        response = requests.get(url, params=params)
        if response.status_code != 200:
            return {
                "status": "partial_success",
                "message": f"YouTube API Error: {response.json().get('error', {}).get('message', 'Unknown error')}",
                "results": []
            }

        data = response.json()
        playlists = [
            {
                'title': item['snippet']['title'],
                'playlistId': item['id']['playlistId'],
                'channelTitle': item['snippet']['channelTitle'],
                'thumbnail': item['snippet']['thumbnails']['default']['url']
            }
            for item in data.get('items', [])
        ]

        return {
            "status": "success",
            "results": playlists
        }

    except Exception as e:
        return {
            "status": "error",
            "message": f"Failed to fetch YouTube resources: {str(e)}",
            "results": []
        }
