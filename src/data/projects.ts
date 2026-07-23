export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  responsibilities: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-automation-platform",
    title: "Enterprise AI Automation Platform",
    category: "Generative AI",
    summary:
      "Enterprise AI agents for knowledge retrieval, code assistance, and automated log analysis.",
    description:
      "Designed and developed an enterprise AI platform using locally deployed large language models, retrieval-augmented generation, fine-tuning, and tool-enabled agent workflows.",
    image: "/projects/ai-automation.png",
    technologies: [
      "Generative AI",
      "RAG",
      "LangChain",
      "LangGraph",
      "Ollama",
      "Unsloth",
      "Vector Databases",
      "Python",
    ],
    highlights: [
      "Knowledge Retrieval Agent for grounded enterprise search",
      "Code Assistance Agent for AI-supported development",
      "Log Analysis Agent for automated system diagnostics",
      "Secure local deployment with low-latency inference",
    ],
    responsibilities: [
      "Designed agent workflows for enterprise knowledge retrieval, code assistance, and log diagnostics.",
      "Built RAG pipelines that retrieved relevant internal information before generating responses.",
      "Fine-tuned and optimized open-source LLMs using Unsloth.",
      "Deployed models through Ollama for secure local inference.",
      "Connected agents with tools and enterprise data sources.",
    ],
    challenges: [
      "Preventing hallucinated answers when working with internal information.",
      "Maintaining data privacy while using large language models.",
      "Reducing inference latency for locally deployed models.",
      "Coordinating multiple tools and agent workflows reliably.",
    ],
    solutions: [
      "Used retrieval-augmented generation to ground responses in relevant enterprise documents.",
      "Deployed open-source LLMs locally instead of sending private data to external services.",
      "Optimized models with Unsloth and selected efficient inference configurations.",
      "Added structured prompts, tool validation, and response-quality checks.",
    ],
    results: [
      "Improved team productivity by approximately 40%.",
      "Enabled secure enterprise AI workflows with local inference.",
      "Reduced manual effort for knowledge search and log investigation.",
      "Provided reusable foundations for additional AI agents.",
    ],
    featured: true,
  },
  {
    slug: "facial-recognition",
    title: "GPU Facial Recognition System",
    category: "Computer Vision",
    summary:
      "A real-time edge facial-recognition system using GPU inference and Raspberry Pi integration.",
    description:
      "Engineered a GPU-accelerated facial-recognition solution using DeepFace, FaceNet512, OpenCV, Flask APIs, Angular, and Raspberry Pi for real-world edge deployment.",
    image: "/projects/facial-recognition.png",
    technologies: [
      "Python",
      "DeepFace",
      "FaceNet512",
      "OpenCV",
      "Flask",
      "Angular",
      "Raspberry Pi",
      "GPU Computing",
    ],
    highlights: [
      "Real-time facial detection and recognition",
      "GPU-accelerated inference",
      "Flask API integration",
      "Angular client application",
      "Edge-device deployment",
    ],
    responsibilities: [
      "Designed the end-to-end recognition workflow.",
      "Integrated DeepFace and FaceNet512 for facial embeddings and matching.",
      "Built Flask APIs for communication between the recognition service and frontend.",
      "Created an Angular interface for system interaction.",
      "Integrated Raspberry Pi hardware for edge usage.",
    ],
    challenges: [
      "Maintaining recognition accuracy under different lighting conditions.",
      "Reducing response time for real-time operation.",
      "Connecting GPU processing with resource-constrained edge hardware.",
      "Handling communication between Python services and the Angular frontend.",
    ],
    solutions: [
      "Applied image preprocessing and face-alignment techniques.",
      "Used GPU acceleration for embedding generation and comparison.",
      "Separated heavy inference from edge-device interaction through APIs.",
      "Designed clear request and response contracts between services.",
    ],
    results: [
      "Enabled real-time facial recognition for secure user authentication.",
      "Created a reusable API-based computer-vision architecture.",
      "Demonstrated practical GPU and edge-device integration.",
    ],
    featured: true,
  },
  {
    slug: "lifestyle-assistant",
    title: "Multimodal AI Lifestyle Assistant",
    category: "Agentic AI",
    summary:
      "A personalized AI assistant with multimodal inputs, planning, memory, tool use, and recommendation workflows.",
    description:
      "Built a full-stack AI assistant using RAG, LLM agents, vector search, multimodal inputs, memory retrieval, prompt orchestration, tool calling, and personalized recommendations.",
    image: "/projects/lifestyle-assistant.png",
    technologies: [
      "React",
      "TypeScript",
      "RAG",
      "LLM Agents",
      "Vector Search",
      "Multimodal AI",
      "API Integration",
      "Prompt Engineering",
    ],
    highlights: [
      "Intent detection and task decomposition",
      "Memory retrieval and personalized responses",
      "Tool calling and API integrations",
      "Dynamic cards and comparison views",
      "Feedback-driven refinement",
    ],
    responsibilities: [
      "Designed the application architecture across frontend and AI workflows.",
      "Created intent-detection and task-decomposition stages.",
      "Implemented memory retrieval and vector-search functionality.",
      "Built conversational UI components using React and TypeScript.",
      "Added tool calling, response validation, and feedback workflows.",
    ],
    challenges: [
      "Coordinating multiple steps in long-running user requests.",
      "Maintaining relevant context across conversations.",
      "Presenting complex AI results in an understandable interface.",
      "Validating tool outputs before returning final responses.",
    ],
    solutions: [
      "Used agentic task decomposition to split requests into smaller actions.",
      "Added memory and vector search for contextual retrieval.",
      "Built reusable dynamic cards and comparison components.",
      "Added output validation and feedback-based refinement.",
    ],
    results: [
      "Delivered personalized recommendations and planning assistance.",
      "Supported conversational and multimodal user experiences.",
      "Created a reusable foundation for additional lifestyle tools.",
    ],
    githubUrl: "https://github.com/",
    featured: true,
  },
{
  slug: "traffic-intelligence-platform",
  title: "Traffic Intelligence Platform",
  category: "AI • Computer Vision • Full Stack",
  summary:
    "A production-oriented traffic monitoring and violation-review platform that processes road footage, detects traffic-rule violations, generates evidence, and supports authenticated human review workflows.",
  description:
    "Designed and developed a full-stack traffic intelligence platform using Next.js, FastAPI, PostgreSQL, YOLO, multi-object tracking, scene-aware reasoning, authentication, evidence generation, and Docker-based deployment. The system transforms uploaded traffic-surveillance footage into structured violation events that administrators and reviewers can inspect, confirm, or reject.",
  image: "/projects/traffic-violation.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "YOLO",
    "OpenCV",
    "SQLAlchemy",
    "Docker",
    "Nginx",
  ],

  featured: true,

  githubUrl:
    "https://github.com/RaghulSayee/traffic-intelligence-platform",

  liveUrl:
    "https://traffic-intelligence-platform-lq7f.onrender.com",

  highlights: [
    "Built a full-stack traffic monitoring dashboard for managing cameras, road-scene configurations, videos, processing jobs, analytics, and violation reviews.",
    "Implemented YOLO-based detection and multi-object tracking for vehicles, motorcycles, riders, helmets, and traffic-signal regions.",
    "Developed scene-aware reasoning for red-light violations, lane violations, wrong-way driving, triple riding, and no-helmet riding.",
    "Generated evidence images and annotated preview videos for human review.",
    "Implemented authenticated administrator and reviewer workflows using JWT access tokens stored in HttpOnly cookies.",
    "Deployed Next.js, FastAPI, Nginx, PostgreSQL integration, and the optional processing worker through a production Docker container on Render.",
  ],

  responsibilities: [
    "Designed the system architecture spanning the Next.js frontend, FastAPI backend, PostgreSQL database, video-processing worker, storage layer, and Nginx reverse proxy.",
    "Implemented REST APIs for cameras, traffic-scene configuration, video uploads, processing jobs, violations, analytics, authentication, and user authorization.",
    "Built the computer-vision pipeline using YOLO detection, Kalman-filter-based tracking, trajectory analysis, and rider-to-motorcycle association.",
    "Created scene-geometry models for lanes, monitoring zones, stop lines, signal regions, and allowed travel directions.",
    "Developed rule-based violation reasoning and confidence scoring.",
    "Built evidence-review workflows that allow reviewers to confirm or reject violations and add notes.",
    "Configured Alembic migrations, Docker deployment, Nginx routing, health checks, and environment-based production settings.",
    "Created backend and frontend validation workflows, including 207 automated backend tests.",
  ],

  challenges: [
    "Maintaining consistent object identities across video frames while handling missed detections and temporary occlusions.",
    "Mapping tracked objects to camera-specific lanes, stop lines, signal regions, and allowed travel directions.",
    "Distinguishing actual traffic violations from short-lived or low-confidence detection noise.",
    "Associating riders and helmets with the correct motorcycle across changing positions and camera perspectives.",
    "Generating reviewable evidence without blocking API requests during long-running video processing.",
    "Securing frontend, backend, and internal server-to-server requests through a single production domain.",
    "Deploying computer-vision dependencies within a resource-constrained public hosting environment.",
  ],

  solutions: [
    "Used multi-object tracking with motion prediction and association logic to preserve object identities across frames.",
    "Created configurable scene geometry and validation rules for each traffic camera.",
    "Combined detection confidence, tracking history, scene context, and rule confidence before creating violations.",
    "Implemented rider-to-motorcycle association using spatial relationships and temporal consistency.",
    "Separated video processing into asynchronous jobs with queued, running, completed, failed, and cancelled states.",
    "Used Nginx to route Next.js pages and FastAPI endpoints through the same production domain.",
    "Implemented JWT authentication with HttpOnly cookies, role-based authorization, and a private internal API key.",
    "Used Docker, Alembic startup migrations, health endpoints, and environment-controlled worker execution for deployment.",
  ],

  results: [
    "Delivered a working full-stack traffic intelligence application with a publicly accessible production deployment.",
    "Supported five traffic-violation categories: red-light, lane, wrong-way, triple-riding, and no-helmet violations.",
    "Created end-to-end workflows from video upload and processing through evidence generation and human review.",
    "Implemented pagination, filtering, processing metrics, review-status tracking, and analytics dashboards.",
    "Established automated validation with 207 backend tests covering APIs, security, scene validation, processing logic, and reasoning components.",
    "Published the complete source code, deployment configuration, documentation, and local-development workflow on GitHub.",
  ],
},
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}