# GapShap

GapShap is a real-time chat application built using Next.js, Tailwind CSS, NextAuth, Pusher, and Cloudinary.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Real-time messaging using Pusher
- Authentication and authorization with NextAuth
- Responsive design with Tailwind CSS
- Image upload and storage using Cloudinary

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/GapShap.git
cd GapShap
```

Then, install the dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Next, create a .env.local file to store your environment variables. You can use the .env.example file as a template:
# Example .env.local file
```bash
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-database-url
NEXT_PUBLIC_PUSHER_KEY=your-pusher-key
PUSHER_SECRET=your-pusher-secret
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

[`https://nextjs.org/docs`] - learn about Next.js features and API.
[`https://tailwindcss.com/docs/installation`] - learn about Tailwind CSS.
[`https://next-auth.js.org/tutorials`] - learn about NextAuth for authentication.
[`https://pusher.com/docs/`] - learn about Pusher for real-time features.
[`https://cloudinary.com/documentation`] - learn about Cloudinary for image and video management.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
