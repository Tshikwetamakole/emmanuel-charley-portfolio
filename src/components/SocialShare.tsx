import React from "react";
import { motion } from "framer-motion";
import { Twitter, Facebook, Linkedin, Link as LinkIcon, Mail } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
  excerpt?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url, excerpt = "" }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt);

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:bg-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      url: `mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0A${encodedUrl}`,
      color: "hover:bg-gray-600",
      bgColor: "bg-gray-600/10",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
        Share This Post
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {shareLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 ${link.bgColor} border border-white/10 rounded-xl text-foreground/80 transition-all duration-300 ${link.color} hover:text-white hover:border-transparent group`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </span>
            <span className="text-sm font-medium">{link.name}</span>
          </motion.a>
        ))}

        {/* Copy Link Button */}
        <motion.button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-white/10 rounded-xl text-foreground/80 hover:bg-accent hover:text-white hover:border-transparent transition-all duration-300 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: shareLinks.length * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LinkIcon size={18} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm font-medium">Copy Link</span>
        </motion.button>
      </div>
    </div>
  );
};

export default SocialShare;
