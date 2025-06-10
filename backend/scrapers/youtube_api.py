from flask import Blueprint, request, jsonify
from learnmap.backend.scrapers.youtube_scraper import fetch_youtube_resources

youtube_api = Blueprint('youtube_api', __name__)

@youtube_api.route('/scrape', methods=['GET'])
def scrape_youtube():
    domain = request.args.get('domain')

    if not domain:
        return jsonify({"error": "Missing 'domain' parameter"}), 400

    try:
        resources = fetch_youtube_resources(domain)
        return jsonify({"youtube": resources})  
    except Exception as e:
        return jsonify({"error": str(e)}), 500
