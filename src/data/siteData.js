import {
  BrainCircuit, Code2, Cpu, Fingerprint, FlaskConical, GraduationCap,
  Hospital, Lightbulb, Network, Recycle, Smartphone, CircuitBoard
} from 'lucide-react'
import MichealFranklinImg from '../img/MichealFranklin.png'
import JaijothiImg from '../img/Jaijothi.png'
import GodsonImg from '../img/Godson.png'
import MadhumithaImg from '../img/Madumitha.png'
import BabishaImg from '../img/Babisha.png'
import AarushImg from '../img/AarushJeimen.png'
import AdlinImg from '../img/Adlin.png'
//import AbinashImg from '../img/Abinash.png'

export const products = [
  {
    title: 'Biometric Attendance',
    category: 'Hardware & IoT',
    icon: Fingerprint,
    text: 'A smart fingerprint attendance system with a web interface for monitoring student attendance.',
    period: 'Jan 2024 - Apr 2024',
    summary: 'Built a complete smart attendance system for educational environments with secure identity verification and central monitoring.',
    functions: [
      'Fingerprint registration and verification',
      'Real-time attendance tracking',
      'Student and class-based attendance reports',
      'Admin dashboard with attendance logs',
      'Daily and monthly performance summaries'
    ],
    achievements: [
      'Reduced manual attendance effort by 70%',
      'Improved accuracy and transparency in classroom tracking',
      'Created a ready-to-demo academic workflow solution'
    ]
  },
  {
    title: 'Smart Water Bottle',
    category: 'Hardware & IoT',
    icon: Smartphone,
    text: 'A connected bottle designed to remind users to drink water and monitor their water intake.',
    period: 'May 2023 - Jul 2023',
    summary: 'Designed an IoT-enabled water bottle that encourages healthy hydration habits through reminders and smart usage analytics.',
    functions: [
      'Water level sensing and intake monitoring',
      'Smart reminder notifications',
      'Usage trend tracking',
      'Connected data dashboard',
      'Low-battery and refill alerts'
    ],
    achievements: [
      'Created a real-world wellness prototype',
      'Improved hydration awareness through actionable reminders',
      'Validated a practical health-tech product concept'
    ]
  },
  {
    title: 'AI Based Garbage Bin',
    category: 'Hardware & AI',
    icon: Recycle,
    text: 'An AI-assisted waste-management concept that separates waste and monitors bin capacity. Currently under development.',
    period: 'Jun 2024 - Ongoing',
    summary: 'This project explores AI-driven waste segregation and smart bin monitoring for cleaner and more efficient waste handling.',
    functions: [
      'Waste classification using AI vision',
      'Smart bin fill-level monitoring',
      'Automatic segregation logic',
      'Sensor and actuator control',
      'Monitoring dashboard for waste management teams'
    ],
    achievements: [
      'Built a functional research prototype concept',
      'Combined AI, embedded systems, and sustainability goals',
      'Created a strong base for future smart-city applications'
    ]
  },
  {
    title: 'Hospital Management System',
    category: 'Software',
    icon: Hospital,
    text: 'A hospital platform for patient records, appointments, staff, reports, secure login and real-time updates.',
    period: 'Sep 2022 - Mar 2023',
    summary: 'Developed a hospital management platform to streamline patient care, appointment handling, staff operations, and reporting.',
    functions: [
      'Patient registration and record management',
      'Appointment scheduling and updates',
      'Doctor and staff workflow management',
      'Billing and report generation',
      'Secure login and access control'
    ],
    achievements: [
      'Digitized patient and operational workflows',
      'Reduced administrative delays across key hospital processes',
      'Delivered a scalable management platform for healthcare teams'
    ]
  },
  {
    title: 'AI Based Garbage Bin',
    category: 'Hardware & AI',
    icon: Recycle,
    text: 'An AI-assisted waste-management concept that separates waste and monitors bin capacity. Currently under development.',
    period: 'Jun 2024 - Ongoing',
    summary: 'This project explores AI-driven waste segregation and smart bin monitoring for cleaner and more efficient waste handling.',
    functions: [
      'Waste classification using AI vision',
      'Smart bin fill-level monitoring',
      'Automatic segregation logic',
      'Sensor and actuator control',
      'Monitoring dashboard for waste management teams'
    ],
    achievements: [
      'Built a functional research prototype concept',
      'Combined AI, embedded systems, and sustainability goals',
      'Created a strong base for future smart-city applications'
    ]
  }
]

export const services = [
  ['Custom Software Development', 'We design and build tailored software solutions around specific business and operational needs.', Code2],
  ['Hardware Prototyping', 'From concept to prototype, we develop electronic systems with rapid iteration and testing.', Cpu],
  ['IoT Integration', 'We connect devices, data and software into useful, connected technology ecosystems.', Network],
  ['System Integration', 'We connect existing systems with new technologies to create unified workflows.', CircuitBoard],
  ['Final Year Projects', 'We support engineering students and researchers with prototype-oriented hardware and software development.', GraduationCap],
  ['Workshops & Webinars', 'Practical technology sessions designed to help learners build real engineering and development skills.', FlaskConical]
]

export const team = [
  {
    name: 'Mr. Michael Franklin',
    role: 'Co-Founder',
    text: 'Assistant Professor & Head of the Department of Electronics and Communication Engineering',
    image: MichealFranklinImg,
    linkedin: 'https://www.linkedin.com/in/michael-franklin-45686a1a1'
  },
  {
    name: 'Jai Jothi .K',
    role: 'CEO / Co-Founder',
    text: 'Expert in embedded IoT, PCB design, edge ML and FreeRTOS, building smart connected hardware systems.',
    image: JaijothiImg,
    linkedin: 'https://www.linkedin.com/in/jaijothi-kannan-6b2b5b253'
  },
  {
    name: 'Godson .S',
    role: 'CTO / Co-Founder',
    text: 'Creative 3D designer, web app developer and product developer focused on functional digital solutions.',
    image: GodsonImg,
    linkedin: 'https://www.linkedin.com/in/godson-s-741a3a354'
  },
  {
    name: 'Madhumitha',
    role: 'CFO',
    text: 'Finance and business operations.',
    image: MadhumithaImg,
    linkedin: 'https://www.linkedin.com/in/madhumitha-v-a40713307'
  },
  {
    name: 'Babisha .R',
    role: 'HR',
    text: 'People and team operations.',
    image: BabishaImg,
    linkedin: 'https://www.linkedin.com/in/babisha5'
  },
  {
    name: 'Aarush Jeimen .M',
    role: 'Hardware Project Manager',
    text: 'Hardware project coordination and development.',
    image: AarushImg,
    linkedin: 'https://www.linkedin.com/in/aarush-jeimen-m-606394389'
  },
  {
    name: 'Adlin .T',
    role: 'Software Project Manager',
    text: 'Software project coordination and development.',
    image: AdlinImg,
    linkedin: 'https://www.linkedin.com/in/adlin-dino-t-a2b871277'
  },
  {
    name: 'Abinash Micheal .M',
    role: 'R&D Engineer',
    text: 'Research and development of embedded systems, IoT and robotics solutions.',
  //  image: AbinashImg,
    linkedin: 'https://www.linkedin.com/in/abinash-micheal-m-606394389'
  }
]

export const capabilityItems = [
  ['Embedded Systems','Arduino, ESP32, microcontrollers, sensors, actuators and firmware.'],
  ['IoT & Connectivity','Connected devices, monitoring, dashboards and device-to-cloud workflows.'],
  ['Robotics & Automation','Motor control, sensing, autonomous behavior and automation prototypes.'],
  ['Software Development','Modern web applications, management systems, APIs and digital products.'],
  ['AI & Intelligent Systems','AI-assisted concepts, edge intelligence and smart classification/monitoring.'],
  ['Product Prototyping','Architecture, electronics integration, testing and proof-of-concept development.']
]

export const processSteps = [
  ['Discover','Understand the problem and requirements.'],
  ['Design','Create system architecture and prototype plans.'],
  ['Develop','Build the hardware and software components.'],
  ['Integrate','Connect subsystems and make them work together.'],
  ['Test','Validate behavior, reliability and usability.'],
  ['Deploy','Deliver the working solution and iterate with feedback.']
]

export const companyHighlights = [
  { title: 'End-to-End', text: 'Concept to prototype' },
  { title: 'Multi-domain', text: 'Hardware + software' },
  { title: 'Problem-led', text: 'Built for real needs' }
]

export const aboutFeatures = [
  { icon: Cpu, title: 'Hardware Excellence', text: 'Electronic systems, prototyping and connected devices.' },
  { icon: Code2, title: 'Software Innovation', text: 'Web applications, platforms, dashboards and intelligent software.' },
  { icon: Lightbulb, title: 'Research Mindset', text: 'Experimentation, prototyping and practical problem solving.' }
]

export const heroFloatingCards = [
  { icon: Cpu, label: 'Embedded' },
  { icon: BrainCircuit, label: 'Robotics' },
  { icon: Network, label: 'IoT' }
]
