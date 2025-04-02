# Chat AI

A Next.js application for generating and managing legal and financial documents using AI.

## Features

- User authentication with JWT
- Document template management
- AI-powered document generation
- Secure document storage
- Modern and responsive UI

## Prerequisites

- Node.js 18.x or later
- PostgreSQL 14.x or later
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chat-ai.git
cd chat-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a PostgreSQL database and update the `.env` file with your database credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/chat-ai?schema=public"
JWT_SECRET="your-secret-key-change-this-in-production"
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   └── register/         # Registration page
├── components/           # React components
├── lib/                  # Utility functions and shared code
└── templates/           # Document templates
```

## API Routes

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
