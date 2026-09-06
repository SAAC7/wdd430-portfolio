import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Rescue Animals API',
    description:
      'A full-stack REST API for managing rescued animals, users, adoptions, and reports. It includes CRUD operations, data validation, Google OAuth 2.0 authentication, automated testing, and Swagger API documentation.',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Passport',
      'Google OAuth 2.0',
      'Jest',
      'Supertest',
      'Swagger'
    ],
    link: 'https://rescue-animals-api.onrender.com/api-docs/'
  },
  {
    title: 'CSE341 REST API',
    description:
      'A full-stack REST API developed for the CSE 341 Web Services course featuring CRUD operations, MongoDB integration, authentication, validation, error handling, and Swagger documentation.',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Passport',
      'OAuth',
      'Swagger'
    ],
    link: 'https://cse341-project2-svhx.onrender.com/api-docs/'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          My Portfolio
        </h1>

        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer focused on building
          web applications and REST APIs using modern technologies.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}