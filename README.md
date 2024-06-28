⚙️ Tech Stack
Next.js
MongoDB
NextAuth
TailwindCSS
🔋 Features
👉 Modern Design with Glassmorphism Trend Style: A modern and visually appealing design, incorporating the glassmorphism trend style for a sleek and contemporary appearance.

👉 Discover and Share AI Prompts: Allow users to discover AI prompts shared by the community and create their own prompts to share with the world.
![Screenshot 2024-06-28 111722](https://github.com/stark-akshay3000/elicit_ai/assets/124203973/50727bca-86d2-4878-a293-dc362b47bc90)



👉 Edit and Delete Created Prompts: Users have the ability to edit their created prompts at any time and delete them when needed.

👉 Profile Page: Each user gets a dedicated profile page showcasing all the prompts they've created, providing an overview of their contributions.
![Screenshot 2024-06-28 111750](https://github.com/stark-akshay3000/elicit_ai/assets/124203973/05b7727b-bd78-4e5c-afc8-4a53dcc44ec1)

👉 View Other People's Profiles: Users can explore the profiles of other creators to view the prompts they've shared, fostering a sense of community.

👉 Copy to Clipboard: Implement a convenient "Copy to Clipboard" functionality for users to easily copy the AI prompts for their use.

👉 Search Prompts by Specific Tag: Allow users to search for prompts based on specific tags, making it easier to find prompts related to specific topics.
![Screenshot 2024-06-28 111821](https://github.com/stark-akshay3000/elicit_ai/assets/124203973/d314d676-15e1-4619-863a-1ccbdd4611d9)


👉 Google Authentication using NextAuth: Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

👉 Responsive Website: Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones

and many more, including code architecture and reusability

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
clone the Repo
cd elicit_a


Explain--

Installation

Install the project dependencies using npm:

npm install
Explain
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=


Explain
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from Google Cloud Console, Cryptpool (for random Auth Secret), and MongoDB.

Running the Project

npm run dev

Open http://localhost:3000 in your browser to view the project.


