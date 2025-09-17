import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code, Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface TimelineEvent {
  id: string;
  type: 'work' | 'education' | 'project' | 'achievement';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
  icon: React.ReactNode;
  color: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: '1',
    type: 'work',
    title: 'Full-Stack Developer & Creative Strategist',
    organization: 'Freelance',
    location: 'Johannesburg, South Africa',
    startDate: '2021-01',
    description: 'Providing comprehensive digital solutions including custom software development, cloud infrastructure, and creative design services.',
    highlights: [
      'Delivered 15+ successful projects for diverse clients',
      'Specialized in React, Node.js, and cloud solutions',
      'Achieved 40% cost reduction for enterprise cloud migration',
      'Built award-winning mobile apps for hackathons'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
    icon: <Briefcase size={20} />,
    color: '#f43f5e'
  },
  {
    id: '2',
    type: 'project',
    title: 'Hyka E-Hailing App',
    organization: '2024 Hackathon Winner',
    location: 'Johannesburg, South Africa',
    startDate: '2024-08',
    endDate: '2024-08',
    description: 'Led development of innovative ride-sharing solution for underserved communities during hackathon competition.',
    highlights: [
      'First place winner in mobility category',
      'Real-time GPS tracking and secure payments',
      'Focus on African market connectivity challenges',
      'User-centered design approach'
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'Google Maps API'],
    icon: <Award size={20} />,
    color: '#10b981'
  },
  {
    id: '3',
    type: 'project',
    title: 'Community Connect Safety App',
    organization: 'Community Impact Project',
    location: 'Johannesburg, South Africa',
    startDate: '2024-03',
    endDate: '2024-06',
    description: 'Project manager and lead developer for real-time community safety and emergency response platform.',
    highlights: [
      'Real-time incident reporting and tracking',
      'Community engagement features',
      'Emergency response coordination',
      'Cross-platform mobile solution'
    ],
    technologies: ['C#', '.NET MAUI', 'Firebase', 'Azure'],
    icon: <Code size={20} />,
    color: '#3b82f6'
  },
  {
    id: '4',
    type: 'education',
    title: 'Advanced Web Development',
    organization: 'Udemy / Self-Directed Learning',
    location: 'Online',
    startDate: '2020-09',
    description: 'Comprehensive full-stack development training with focus on modern frameworks and cloud technologies.',
    highlights: [
      'React & Next.js mastery',
      'Node.js and API development',
      'Cloud deployment and DevOps',
      'Modern CSS and design systems'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    icon: <GraduationCap size={20} />,
    color: '#8b5cf6'
  },
  {
    id: '5',
    type: 'achievement',
    title: 'NEMISA Digital Literacy Certification',
    organization: 'NEMISA (National Electronic Media Institute)',
    location: 'South Africa',
    startDate: '2021-06',
    endDate: '2021-08',
    description: 'Completed comprehensive digital literacy and technology skills certification program.',
    highlights: [
      'Digital communication and collaboration',
      'Technology project management',
      'Digital content creation',
      'Online safety and ethics'
    ],
    icon: <Award size={20} />,
    color: '#f59e0b'
  },
  {
    id: '6',
    type: 'work',
    title: 'UI/UX Designer & Front-End Developer',
    organization: 'Execute Technologies',
    location: 'Remote',
    startDate: '2020-03',
    endDate: '2021-12',
    description: 'Led design and development of corporate website and brand identity for emerging tech company.',
    highlights: [
      'Complete brand identity design',
      'Responsive website development',
      'SEO optimization and performance',
      'Client collaboration and project management'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Adobe Creative Suite'],
    link: 'https://execute11.github.io/Execute-Technologies-Website/',
    icon: <Briefcase size={20} />,
    color: '#f43f5e'
  }
];

const InteractiveTimeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredEvents = filterType === 'all' 
    ? timelineData 
    : timelineData.filter(event => event.type === filterType);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      work: 'Work Experience',
      education: 'Education',
      project: 'Projects',
      achievement: 'Achievements'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const typeIcons = {
    work: <Briefcase size={16} />,
    education: <GraduationCap size={16} />,
    project: <Code size={16} />,
    achievement: <Award size={16} />
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold text-foreground mb-4">Career Journey</h3>
        <p className="text-foreground/70 mb-6">
          An interactive timeline of my professional growth and key milestones
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['all', 'work', 'project', 'education', 'achievement'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                filterType === type
                  ? 'bg-accent text-white'
                  : 'bg-white/5 text-foreground/70 hover:bg-white/10'
              }`}
            >
              {type !== 'all' && typeIcons[type as keyof typeof typeIcons]}
              {type === 'all' ? 'All' : getTypeLabel(type)}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondaryAccent to-accent opacity-30" />

        {/* Timeline Events */}
        <div className="space-y-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-6 group cursor-pointer"
              onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
            >
              {/* Timeline Dot */}
              <div 
                className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white/10 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: event.color }}
              >
                <div className="text-white">
                  {event.icon}
                </div>
                
                {/* Pulse effect */}
                <div 
                  className="absolute inset-0 rounded-full animate-ping opacity-20"
                  style={{ backgroundColor: event.color }}
                />
              </div>

              {/* Event Content */}
              <div className="flex-1 min-w-0">
                <motion.div
                  className={`p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 ${
                    selectedEvent?.id === event.id 
                      ? 'border-accent/50 shadow-lg shadow-accent/10' 
                      : 'group-hover:border-accent/30'
                  }`}
                  layout
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{event.organization}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>
                            {formatDate(event.startDate)} - {event.endDate ? formatDate(event.endDate) : 'Present'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} className="text-accent" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-4">{event.description}</p>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{ height: selectedEvent?.id === event.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {selectedEvent?.id === event.id && (
                      <div className="pt-4 border-t border-white/10">
                        {/* Highlights */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-foreground/90 mb-3">Key Highlights</h5>
                          <ul className="space-y-2">
                            {event.highlights.map((highlight, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start gap-2 text-sm text-foreground/70"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {event.technologies && (
                          <div>
                            <h5 className="text-sm font-semibold text-foreground/90 mb-3">Technologies Used</h5>
                            <div className="flex flex-wrap gap-2">
                              {event.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>

                  {/* Click indicator */}
                  <div className="mt-4 text-xs text-foreground/50 text-center">
                    {selectedEvent?.id === event.id ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;