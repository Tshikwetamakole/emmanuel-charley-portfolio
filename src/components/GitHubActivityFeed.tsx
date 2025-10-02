import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, GitCommit, Users, Calendar, ExternalLink, RefreshCw } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  created_at: string;
  topics: string[];
}

interface GitHubActivity {
  repos: GitHubRepo[];
  totalRepos: number;
  totalStars: number;
  languages: { [key: string]: number };
  lastUpdate: string;
}

const GitHubActivityFeed: React.FC = () => {
  const [activity, setActivity] = useState<GitHubActivity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchGitHubData = async () => {
    try {
      setError(null);
      const username = 'Tshikwetamakole';
      
      // Fetch user repositories from GitHub API
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories');
      }
      
      const repos = await reposResponse.json();
      
      // Filter out forks and sort by last updated
      const ownRepos = repos.filter((repo: any) => !repo.fork);
      
      // Calculate total stars
      const totalStars = ownRepos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
      
      // Calculate language distribution
      const languageCounts: { [key: string]: number } = {};
      ownRepos.forEach((repo: any) => {
        if (repo.language) {
          languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
        }
      });
      
      // Convert to percentages
      const totalWithLanguage = Object.values(languageCounts).reduce((sum: number, count: number) => sum + count, 0);
      const languages: { [key: string]: number } = {};
      Object.entries(languageCounts).forEach(([lang, count]) => {
        languages[lang] = Math.round((count / totalWithLanguage) * 100);
      });
      
      // Sort languages by percentage and take top 5
      const sortedLanguages = Object.entries(languages)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});
      
      // Format repos for display (top 4 most recently updated)
      const formattedRepos: GitHubRepo[] = ownRepos.slice(0, 4).map((repo: any) => ({
        name: repo.name,
        description: repo.description || 'No description provided',
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        language: repo.language || 'Unknown',
        updated_at: repo.updated_at,
        created_at: repo.created_at,
        topics: repo.topics || []
      }));
      
      const activityData: GitHubActivity = {
        repos: formattedRepos,
        totalRepos: ownRepos.length,
        totalStars,
        languages: sortedLanguages,
        lastUpdate: new Date().toISOString()
      };

      setActivity(activityData);
    } catch (err) {
      setError('Failed to fetch GitHub data');
      console.error('GitHub API Error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchGitHubData();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'C#': '#239120',
      'CSS': '#563d7c',
      'React Native': '#61dafb'
    };
    return colors[language] || '#8b5cf6';
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded-lg mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-white/5 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="text-center p-8 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">GitHub Activity</h3>
            <p className="text-foreground/70">Recent projects and contributions</p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 group"
          >
            <RefreshCw size={20} className={`text-accent ${refreshing ? 'animate-spin' : 'group-hover:rotate-180'} transition-transform duration-300`} />
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <GitBranch size={24} className="text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">{activity?.totalRepos}</p>
                <p className="text-sm text-foreground/70">Repositories</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <Star size={24} className="text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{activity?.totalStars}</p>
                <p className="text-sm text-foreground/70">Total Stars</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <Calendar size={24} className="text-secondaryAccent" />
              <div>
                <p className="text-sm font-semibold text-foreground">Last Update</p>
                <p className="text-sm text-foreground/70">{formatDate(activity?.lastUpdate || '')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Language Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8 p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl"
        >
          <h4 className="text-lg font-semibold text-foreground mb-4">Language Distribution</h4>
          <div className="space-y-3">
            {Object.entries(activity?.languages || {}).map(([language, percentage]) => (
              <div key={language} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getLanguageColor(language) }}
                />
                <span className="text-sm text-foreground flex-1">{language}</span>
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: getLanguageColor(language) }}
                  />
                </div>
                <span className="text-sm text-foreground/70 w-10 text-right">{percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Repositories */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">Recent Projects</h4>
          {activity?.repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/30 rounded-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                      {repo.name}
                    </h5>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <ExternalLink size={16} className="text-accent" />
                    </a>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">{repo.description}</p>
                  
                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-foreground/60">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>
                <span>Updated {formatDate(repo.updated_at)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubActivityFeed;