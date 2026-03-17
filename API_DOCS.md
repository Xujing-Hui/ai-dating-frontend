Backend API Documentation
Base URL: http://localhost:8080

1. Bio Rewrite

POST /api/profile/rewrite-bio
Content-Type: application/json
Request: { "bio": string (10-500 chars), "tone": "casual" | "professional" | "bold" }
Response: { "originalBio": string, "rewrittenBios": string[], "tone": string }

2. Photo Ranking

POST /api/profile/rank-photos
Content-Type: multipart/form-data
Request: field name "photos", array of files (1-5, JPEG/PNG, each <10MB)
Response: { "rankedPhotos": [{ "photoName": string, "rank": number, "score": number, "reasoning": string, "base64Image": string | null }] }

3. Conversation Starters

POST /api/profile/generate-openers
Content-Type: application/json
Request: { "bio": string (10-500 chars), "tone": "bold" | "polite" | "concise" }
Response: { "bio": string, "starters": string[], "tone": string }
