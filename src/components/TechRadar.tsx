import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'cloud';
  proficiency: number; // 1-4 (1: learning, 2: competent, 3: proficient, 4: expert)
  angle: number; // 0-360 degrees
  radius: number; // distance from center
}

const techData: TechItem[] = [
  // Languages
  { name: 'TypeScript', category: 'languages', proficiency: 4, angle: 45, radius: 0.8 },
  { name: 'JavaScript', category: 'languages', proficiency: 4, angle: 60, radius: 0.9 },
  { name: 'Python', category: 'languages', proficiency: 3, radius: 0.6, angle: 30 },
  { name: 'C#', category: 'languages', proficiency: 3, radius: 0.7, angle: 75 },
  
  // Frameworks
  { name: 'React', category: 'frameworks', proficiency: 4, angle: 135, radius: 0.9 },
  { name: 'Next.js', category: 'frameworks', proficiency: 3, angle: 150, radius: 0.7 },
  { name: 'Node.js', category: 'frameworks', proficiency: 3, angle: 120, radius: 0.8 },
  { name: 'React Native', category: 'frameworks', proficiency: 2, angle: 165, radius: 0.5 },
  { name: '.NET', category: 'frameworks', proficiency: 3, angle: 105, radius: 0.6 },
  
  // Tools
  { name: 'Git', category: 'tools', proficiency: 4, angle: 225, radius: 0.9 },
  { name: 'Docker', category: 'tools', proficiency: 2, angle: 240, radius: 0.5 },
  { name: 'Figma', category: 'tools', proficiency: 3, angle: 255, radius: 0.7 },
  { name: 'VS Code', category: 'tools', proficiency: 4, angle: 210, radius: 0.8 },
  
  // Cloud
  { name: 'AWS', category: 'cloud', proficiency: 2, angle: 315, radius: 0.5 },
  { name: 'Vercel', category: 'cloud', proficiency: 3, angle: 330, radius: 0.7 },
  { name: 'Firebase', category: 'cloud', proficiency: 3, angle: 345, radius: 0.8 },
  { name: 'Supabase', category: 'cloud', proficiency: 2, angle: 300, radius: 0.6 },
];

const categoryColors = {
  languages: '#f43f5e', // accent color
  frameworks: '#10b981', // green
  tools: '#3b82f6', // blue
  cloud: '#f59e0b', // orange/yellow
};

const categoryLabels = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  tools: 'Tools & Design',
  cloud: 'Cloud & DevOps',
};

const TechRadar: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const size = 400;
  const center = size / 2;
  const maxRadius = size / 2 - 40;

  // Convert polar coordinates to cartesian
  const polarToCartesian = (angle: number, radius: number) => {
    const radians = (angle - 90) * (Math.PI / 180);
    return {
      x: center + radius * maxRadius * Math.cos(radians),
      y: center + radius * maxRadius * Math.sin(radians),
    };
  };

  // Filter data based on selected category
  const filteredData = selectedCategory 
    ? techData.filter(item => item.category === selectedCategory)
    : techData;

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Technology Radar</h3>
        <p className="text-foreground/70 mb-6">
          Interactive visualization of my technical expertise and learning journey
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-accent text-white'
              : 'bg-white/5 text-foreground/70 hover:bg-white/10'
          }`}
        >
          All
        </button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === key
                ? 'text-white'
                : 'bg-white/5 text-foreground/70 hover:bg-white/10'
            }`}
            style={{
              backgroundColor: selectedCategory === key ? categoryColors[key as keyof typeof categoryColors] : undefined
            }}
          >
            <span className="inline-block w-2 h-2 rounded-full mr-2" 
                  style={{ backgroundColor: categoryColors[key as keyof typeof categoryColors] }} />
            {label}
          </button>
        ))}
      </div>

      {/* Radar Chart */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <svg
            ref={svgRef}
            width={size}
            height={size}
            className="drop-shadow-lg"
            style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.05) 0%, transparent 70%)' }}
          >
            {/* Background Circles */}
            {[0.25, 0.5, 0.75, 1].map((radius, index) => (
              <circle
                key={index}
                cx={center}
                cy={center}
                r={radius * maxRadius}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray={index === 3 ? "none" : "5,5"}
              />
            ))}

            {/* Quadrant Lines */}
            {[0, 90, 180, 270].map((angle) => {
              const end = polarToCartesian(angle, 1);
              return (
                <line
                  key={angle}
                  x1={center}
                  y1={center}
                  x2={end.x}
                  y2={end.y}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Tech Items */}
            {filteredData.map((tech, index) => {
              const position = polarToCartesian(tech.angle, tech.radius);
              const isHovered = hoveredTech === tech.name;
              const proficiencySize = 4 + tech.proficiency * 3;

              return (
                <motion.g
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Pulse effect for hovered item */}
                  {isHovered && (
                    <circle
                      cx={position.x}
                      cy={position.y}
                      r={proficiencySize + 8}
                      fill={categoryColors[tech.category]}
                      opacity="0.2"
                      className="animate-ping"
                    />
                  )}
                  
                  {/* Tech dot */}
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={proficiencySize}
                    fill={categoryColors[tech.category]}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    opacity={selectedCategory && selectedCategory !== tech.category ? 0.3 : 1}
                    style={{
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      transformOrigin: `${position.x}px ${position.y}px`,
                    }}
                  />
                  
                  {/* Tech label */}
                  <text
                    x={position.x}
                    y={position.y - proficiencySize - 8}
                    textAnchor="middle"
                    className="fill-foreground text-xs font-medium pointer-events-none"
                    opacity={isHovered ? 1 : 0.7}
                    style={{
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: `${position.x}px ${position.y - proficiencySize - 8}px`,
                    }}
                  >
                    {tech.name}
                  </text>
                </motion.g>
              );
            })}

            {/* Center label */}
            <text
              x={center}
              y={center}
              textAnchor="middle"
              className="fill-accent text-sm font-bold"
              dy="0.35em"
            >
              Skills
            </text>
          </svg>

          {/* Legend */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 text-xs text-foreground/60">
            <span>● Learning</span>
            <span>●● Competent</span>
            <span>●●● Proficient</span>
            <span>●●●● Expert</span>
          </div>
        </motion.div>
      </div>

      {/* Hovered Tech Details */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-8 text-center"
        >
          <div className="inline-block p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl">
            <h4 className="font-semibold text-foreground">{hoveredTech}</h4>
            <p className="text-sm text-foreground/70 mt-1">
              {categoryLabels[techData.find(t => t.name === hoveredTech)?.category as keyof typeof categoryLabels]}
            </p>
            <div className="flex justify-center mt-2">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full mx-0.5 ${
                    level <= (techData.find(t => t.name === hoveredTech)?.proficiency || 0)
                      ? 'bg-accent'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TechRadar;