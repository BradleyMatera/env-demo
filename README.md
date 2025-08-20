# Non-shared Secret Demo

This repo demonstrates using a .env file for secrets in a Node.js app.

## How to Run

Create a `.env` file with:
```
API_KEY=yourkey
```
Then run:
```bash
node app.js
```

## Explanation
The secret is in a `.env` file, which is listed in `.gitignore` so it is not pushed to the repo. If someone clones the repo, they must create their own `.env` file.
