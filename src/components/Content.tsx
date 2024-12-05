import { Youtube } from 'lucide-react';

export default function Content() {
  return (
    <div id="content" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lockdown Podcast KE
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Tech insights, tutorials, and digital solutions
          </p>
        </div>

        <div className="mt-12">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/videoseries?list=UUZ9YP6WG3OxqyY5YP9UqEqA"
              title="Lockdown Podcast KE YouTube Channel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.youtube.com/@LockdownPodcastKE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe to Our Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}