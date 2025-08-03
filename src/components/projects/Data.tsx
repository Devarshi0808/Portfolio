import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Devarshi Wadadkar - AI/ML Portfolio',
    shortDescription: 'Modern, interactive portfolio website with AI-powered chat interface',
    description:
      'A responsive, full-stack portfolio web application built to present Devarshi Wadadkar\'s professional profile. It includes an AI-powered chat assistant that leverages OpenAI tool calling for intelligent, dynamic responses. The assistant can retrieve and display information about skills, experience, and projects in real-time. The site features smooth animations, a responsive avatar, project carousels, an experience timeline, and a categorized skills display. It\'s optimized for all screen sizes and deployed with Vercel for high performance and fast delivery.\n\n**Key Features:**\n🤖 AI-Powered Chat Interface - Context-aware chatbot using OpenAI tool calling to dynamically retrieve and display skills, project details, and experience.\n🎨 Modern, Responsive UI - Fully responsive design with dark/light mode toggle, smooth animations, and fluid interactions via Framer Motion and Tailwind CSS 4.\n🧠 Tool-Integrated AI Assistant - AI assistant can invoke backend tools to respond with structured data—like project info, skills, etc.—in real time.\n🖼️ Interactive Project Carousel - Swipeable, responsive cards with animated previews and detailed descriptions.\n💼 Experience Timeline & Skills Badging - Animated experience cards with company logos and categorized, color-coded skill badges.\n📩 Professional Contact Modal - Multi-method contact options including email, LinkedIn, calendar booking, and direct resume download.\n\n**Technical Challenges:**\n⚙️ Implementing OpenAI Tool Calling - Designing and integrating custom tools that the chat assistant could invoke for dynamic content retrieval required architectural planning and state handling.\n🔄 Maintaining Chat Context Across Sessions - Ensuring the AI assistant retained context and managed user input gracefully while keeping performance in check with streaming responses.\n🎛️ Framer Motion + React State Management - Coordinating complex UI animations with real-time chat updates and state transitions without performance issues.\n🧪 Deploying Experimental React 19 & Next.js 15 Features - Navigating the bleeding edge of React and Next.js required testing and adapting to evolving API behavior.\n\n**Learning Outcomes:**\n🛠️ Deep Understanding of OpenAI SDK & Tool Calling - Gained hands-on experience with advanced LLM integrations and designing intelligent UI+AI systems.\n💻 Modern Frontend Engineering Best Practices - Strengthened skills in React 19, Next.js App Router architecture, TypeScript, and utility-first styling with Tailwind CSS.\n🧩 Modular Component Design - Learned to build scalable, reusable, and accessible UI components for a professional-grade app.\n🚀 End-to-End Deployment & Optimization - Mastered deploying full-stack apps with Vercel, handling environment configs, performance analytics, and production optimization.',
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'OpenAI API',
      'Vercel AI SDK',
      'Framer Motion',
      'Radix UI',
      'Lucide React',
      'Vercel',
      'GitHub'
    ],
    date: '2024',
    links: [
      {
        name: 'live demo',
        url: 'https://www.dwadadkar.me',
      },
      {
        name: 'github',
        url: 'https://github.com/Devarshi0808/Portfolio',
      },
    ],
    images: [
      {
        src: '/portfolio-home.png',
        alt: 'Portfolio home page with AI chat interface',
      },
      {
        src: '/portfolio-chat.png',
        alt: 'AI-powered chat interface with tool calling',
      },
      {
        src: '/portfolio-projects.png',
        alt: 'Interactive project carousel and timeline',
      },
    ],
  },
  {
    title: 'CloudMatch',
    shortDescription: 'AI-powered cloud marketplace discovery tool for AWS, Azure, and GCP',
    description:
      'CloudMatch is an AI-powered cloud marketplace discovery tool that matches products and vendors from Excel sheets with listings across AWS, Azure, and GCP. It features fuzzy matching, LLM suggestions via Ollama, and a modern UI for real-time, accurate search.',
    techStack: [
      'Python',
      'Streamlit',
      'Pandas',
      'Scikit-learn',
      'Playwright',
      'Selenium',
      'BeautifulSoup',
      'FuzzyWuzzy',
      'RapidFuzz',
      'SQLite',
      'Ollama'
    ],
    date: '2024',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Devarshi0808/CloudMatch',
      },
    ],
    images: [
      {
        src: '/cloudmatch1.png',
        alt: 'CloudMatch dashboard',
      },
      {
        src: '/cloudmatch2.png',
        alt: 'CloudMatch matching interface',
      },
      {
        src: '/cloudmatch3.png',
        alt: 'CloudMatch results',
      },
    ],
  },
  {
    title: 'Hindi Text Summarizer',
    shortDescription: 'Extractive summarization tool for Hindi text using TextRank algorithm',
    description:
      'An extractive summarization tool tailored for Hindi language text, using the TextRank algorithm. It ranks sentences by importance and selects the top ones for a concise summary. The system supports both web-based and CLI usage, includes batch processing, and provides evaluation against human-written summaries.',
    techStack: [
      'Python',
      'NetworkX',
      'NLTK',
      'Scikit-learn',
      'NumPy',
      'Flask',
      'HTML',
      'CSS'
    ],
    date: '2024',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Devarshi0808/Hindi-Text-Summarizer-using-TextRank-Algorithm-main',
      },
    ],
    images: [
      {
        src: '/hindi-summarizer1.png',
        alt: 'Hindi Text Summarizer interface',
      },
      {
        src: '/hindi-summarizer2.png',
        alt: 'Hindi Text Summarizer results',
      },
    ],
  },
  {
    title: 'BriefPT - Bilingual Text Summarizer',
    shortDescription: 'Bilingual summarization tool for English and Hindi with multiple methods',
    description:
      'BriefPT is an interactive bilingual summarization tool for English and Hindi. It supports both extractive (TextRank with TF-IDF) and abstractive (Transformer-based using DistilBART and mT5) summarization methods, offering real-time processing in a beautifully designed Streamlit interface.',
    techStack: [
      'Python',
      'Streamlit',
      'Transformers',
      'PyTorch',
      'HuggingFace',
      'NLTK',
      'NetworkX',
      'Scikit-learn',
      'DistilBART',
      'mT5'
    ],
    date: '2024',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Devarshi0808/BriefPT-Bilingual-Text-Summarizer',
      },
    ],
    images: [
      {
        src: '/briefpt1.png',
        alt: 'BriefPT interface',
      },
      {
        src: '/briefpt2.png',
        alt: 'BriefPT summarization results',
      },
    ],
  },
  {
    title: 'COVID-19 Detection',
    shortDescription: 'AI-powered diagnostic tool for COVID-19 detection from chest X-rays and CT scans',
    description:
      'An AI-powered diagnostic tool for detecting COVID-19 from Chest X-rays and CT scans using four transfer learning models. It offers a responsive Flask-based web interface, real-time predictions with confidence scores, and supports multiple imaging formats. Trained on real medical imaging data for educational and research purposes.',
    techStack: [
      'Python',
      'Flask',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'NumPy',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'InceptionV3',
      'VGG16',
      'ResNet50',
      'Xception'
    ],
    date: '2024',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Devarshi0808/Covid-19-Prediction-using-Chest-X-Ray-and-CT-Scan',
      },
    ],
    images: [
      {
        src: '/covid-detection1.png',
        alt: 'COVID-19 Detection interface',
      },
      {
        src: '/covid-detection2.png',
        alt: 'COVID-19 Detection results',
      },
      {
        src: '/covid-detection3.png',
        alt: 'COVID-19 Detection model comparison',
      },
    ],
  },
  {
    title: 'Log Similarity Classifier',
    shortDescription: 'ML-based tool to classify log files using TF-IDF and cosine similarity',
    description:
      'A lightweight ML-based tool to classify and identify log files by comparing them to known patterns using TF-IDF vectorization and cosine similarity. Supports multiple datasets (BGL, HDFS, Thunderbird) and provides percentage-based similarity scores for robust log categorization.',
    techStack: [
      'Python',
      'Scikit-learn',
      'NumPy',
      'TF-IDF',
      'Cosine Similarity',
      'CLI'
    ],
    date: '2024',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Devarshi0808/log-similarity-classifier',
      },
    ],
    images: [
      {
        src: '/log-classifier1.png',
        alt: 'Log Similarity Classifier interface',
      },
      {
        src: '/log-classifier2.png',
        alt: 'Log Similarity Classifier results',
      },
      {
        src: '/log-classifier3.png',
        alt: 'Log Similarity Classifier datasets',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Full-Stack Development',
    title: 'Devarshi Wadadkar - AI/ML Portfolio',
    shortDescription: 'Modern, interactive portfolio website with AI-powered chat interface',
    src: '/portfolio-preview.png',
    content: <ProjectContent project={{ title: 'Devarshi Wadadkar - AI/ML Portfolio' }} />,
  },
  {
    category: 'Machine Learning',
    title: 'BriefPT - Bilingual Text Summarizer',
    shortDescription: 'Bilingual summarization tool for English and Hindi with multiple methods',
    src: '/briefptpreview.png?v=2',
    content: <ProjectContent project={{ title: 'BriefPT - Bilingual Text Summarizer' }} />,
  },
  {
    category: 'AI & Cloud',
    title: 'CloudMatch',
    shortDescription: 'AI-powered cloud marketplace discovery tool for AWS, Azure, and GCP',
    src: '/cloudmatchpreview.png',
    content: <ProjectContent project={{ title: 'CloudMatch' }} />,
  },
  {
    category: 'Data Science',
    title: 'Log Similarity Classifier',
    shortDescription: 'ML-based tool to classify log files using TF-IDF and cosine similarity',
    src: '/log-classifierpreview.png',
    content: <ProjectContent project={{ title: 'Log Similarity Classifier' }} />,
  },
  {
    category: 'NLP & Text Processing',
    title: 'Hindi Text Summarizer',
    shortDescription: 'Extractive summarization tool for Hindi text using TextRank algorithm',
    src: '/hindi-summarizerpreview.png?v=2',
    content: <ProjectContent project={{ title: 'Hindi Text Summarizer' }} />,
  },
  {
    category: 'Computer Vision',
    title: 'COVID-19 Detection',
    shortDescription: 'AI-powered diagnostic tool for COVID-19 detection from chest X-rays and CT scans',
    src: '/covid-detectionpreview.png',
    content: <ProjectContent project={{ title: 'COVID-19 Detection' }} />,
  },
];
