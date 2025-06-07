from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import scrape

app = FastAPI(title="Subjectify API", version="1.0")

# Allow frontend requests (adjust port if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to "http://localhost:3000" for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(scrape.router)
