from flask import Blueprint, request, jsonify
from blog_scraper import fetch_blog_articles

blog_api = Blueprint('blog_api', __name__)

@blog_api.route('/scrape', methods=['GET'])
def scrape_blog():
    domain = request.args.get('domain')

    if not domain:
        return jsonify({"error": "Missing 'domain' parameter"}), 400

    try:
        articles = fetch_blog_articles(domain)
        return jsonify({"blogs": articles})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

print(scrape_blog())