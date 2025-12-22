# Mahesh Katti - Portfolio Website

A modern, animated portfolio website built with React, featuring glass morphism design, floating particles, and a chatbot for contact.

## Features

- \u2728 Over-the-top animations and hover effects
- \ud83c\udf10 Glass morphism design with bluish theme
- \ud83e\udd16 Interactive chatbot for contact
- \ud83d\udcf1 Fully responsive design
- \ud83d\ude80 Production-ready code
- \ud83d\udce6 GitHub Pages deployment ready

## Tech Stack

- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, MongoDB
- **Deployment**: GitHub Pages (frontend), Any Node/Python host (backend)

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager
- Python 3.8+ (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install frontend dependencies:
```bash
cd frontend
yarn install
```

3. Install backend dependencies:
```bash
cd backend
pip install -r requirements.txt
```

### Development

1. Start the frontend:
```bash
cd frontend
yarn start
```

2. Start the backend:
```bash
cd backend
uvicorn server:app --reload --port 8001
```

### Build for Production

```bash
cd frontend
yarn build
```

## Deployment

### GitHub Pages (Frontend Only)

1. Push your code to GitHub
2. Go to Settings > Pages
3. Enable GitHub Pages with GitHub Actions
4. Add `REACT_APP_BACKEND_URL` to repository secrets if using backend

The included GitHub Actions workflow will automatically deploy on push to main/master.

### Full Stack Deployment

For full functionality including the chatbot backend:

1. Deploy backend to a server (AWS, Heroku, Railway, etc.)
2. Set the `REACT_APP_BACKEND_URL` environment variable
3. Deploy frontend to GitHub Pages or any static hosting

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=your-backend-url
```

### Backend (.env)
```
MONGO_URL=your-mongodb-url
DB_NAME=portfolio
```

## Project Structure

```
frontend/
\u251c\u2500\u2500 src/
\u2502   \u251c\u2500\u2500 components/     # React components
\u2502   \u251c\u2500\u2500 data/           # Mock data and constants
\u2502   \u251c\u2500\u2500 hooks/          # Custom React hooks
\u2502   \u2514\u2500\u2500 App.js          # Main application
\u251c\u2500\u2500 .github/
\u2502   \u2514\u2500\u2500 workflows/      # GitHub Actions
\u2514\u2500\u2500 package.json

backend/
\u251c\u2500\u2500 server.py           # FastAPI server
\u2514\u2500\u2500 requirements.txt    # Python dependencies
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: maheshkathi20@gmail.com
- **LinkedIn**: [Mahesh Katti](https://linkedin.com/in/maheshkatti)
- **GitHub**: [maheshkatti](https://github.com/maheshkatti)
