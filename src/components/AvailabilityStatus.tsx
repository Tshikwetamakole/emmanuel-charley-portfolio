import React from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

type Status = "available" | "busy" | "away";

interface AvailabilityStatusProps {
  status?: Status;
  showText?: boolean;
  className?: string;
}

const statusConfig = {
  available: {
    color: "bg-green-500",
    text: "Available for Projects",
    description: "Open to new opportunities",
    pulse: true,
  },
  busy: {
    color: "bg-yellow-500",
    text: "Currently Busy",
    description: "Limited availability",
    pulse: false,
  },
  away: {
    color: "bg-red-500",
    text: "Not Available",
    description: "Fully booked",
    pulse: false,
  },
};

const AvailabilityStatus: React.FC<AvailabilityStatusProps> = ({
  status = "available",
  showText = true,
  className = "",
}) => {
  const config = statusConfig[status];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Status Indicator */}
      <div className="relative">
        <div className={`w-3 h-3 ${config.color} rounded-full`} />
        {config.pulse && (
          <motion.div
            className={`absolute inset-0 w-3 h-3 ${config.color} rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {/* Status Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {config.text}
          </span>
          <span className="text-xs text-foreground/60">
            {config.description}
          </span>
        </div>
      )}
    </div>
  );
};

// Larger card version for hero or dedicated section
export const AvailabilityCard: React.FC = () => {
  const status: Status = "available"; // This could be dynamic based on a database or CMS

  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl">
        <AvailabilityStatus status={status} showText={true} />
      </div>
    </motion.div>
  );
};

export default AvailabilityStatus;
