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
    slug: "traffic-violation",
    title: "Traffic Violation Detection",
    category: "Computer Vision Research",
    summary:
      "An automated traffic-violation detection and vehicle-identification pipeline.",
    description:
      "Designed a YOLOv4, CNN, and OCR pipeline for automated traffic-violation detection, vehicle identification, and real-time classification and reporting.",
    image: "/projects/traffic-violation.png",
    technologies: [
      "Python",
      "YOLOv4",
      "CNN",
      "OCR",
      "OpenCV",
      "Computer Vision",
    ],
    highlights: [
      "Vehicle and violation detection",
      "Number-plate recognition",
      "Real-time classification",
      "Automated reporting",
      "Published at NCACT'23 in IJIRSET",
    ],
    responsibilities: [
      "Designed the complete computer-vision pipeline.",
      "Used YOLOv4 for object and vehicle detection.",
      "Applied CNN-based classification for violation identification.",
      "Integrated OCR for vehicle-number extraction.",
      "Built the reporting workflow and evaluated the system.",
    ],
    challenges: [
      "Detecting vehicles across changing traffic conditions.",
      "Reading license plates from low-quality frames.",
      "Combining multiple computer-vision stages reliably.",
      "Supporting real-time processing.",
    ],
    solutions: [
      "Used YOLOv4 for efficient object localization.",
      "Applied image preprocessing before OCR.",
      "Separated detection, classification, and recognition into modular stages.",
      "Optimized the processing sequence for real-time reporting.",
    ],
    results: [
      "Demonstrated automated traffic-violation classification and reporting.",
      "Supported vehicle identification using OCR.",
      "Published the research at NCACT'23 in IJIRSET.",
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}