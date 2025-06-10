from googleapiclient.discovery import build

API_KEY = "AIzaSyCnuWRneqkQs6lOeVZHhzUFrzyOif8sAFI"

def fetch_youtube_resources(domain):
    youtube = build('youtube', 'v3', developerKey=API_KEY)

    request = youtube.search().list(
        q=domain,
        part="snippet",
        type="playlist",
        maxResults=10
    )
    response = request.execute()
    seen_ids = set()
    resources = []

    for item in response.get('items', []):
        playlist_id = item['id'].get('playlistId')
        title = item['snippet'].get('title')

        if not playlist_id or playlist_id in seen_ids:
            continue

        seen_ids.add(playlist_id)
        resources.append({
            'title': title,
            'url': f"https://www.youtube.com/playlist?list={playlist_id}"
        })

    return resources
