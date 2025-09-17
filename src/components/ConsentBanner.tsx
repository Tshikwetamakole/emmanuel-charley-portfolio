import React from 'react';

const ConsentBanner: React.FC = () => {
  const [show, setShow] = React.useState(() => localStorage.getItem('consent') === null);

  const accept = () => {
    localStorage.setItem('consent', 'yes');
    setShow(false);
    // load Plausible analytics if configured
    const domain = (import.meta as any).env?.VITE_PLAUSIBLE_DOMAIN;
    if (domain) {
      const s = document.createElement('script');
      s.setAttribute('defer', '');
      s.setAttribute('data-domain', domain);
      s.src = 'https://plausible.io/js/plausible.js';
      document.head.appendChild(s);
      // also signal a pageview
      (window as any).plausible && (window as any).plausible('pageview');
    }
  };

  const decline = () => {
    localStorage.setItem('consent', 'no');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed left-0 right-0 bottom-4 z-50 flex items-center justify-between max-w-3xl px-4 py-3 mx-auto bg-background/95 border border-borderLine rounded-lg">
      <div className="text-sm">We use a small amount of analytics to improve the site. Do you consent to anonymous analytics?</div>
      <div className="flex gap-2">
        <button onClick={decline} className="px-3 py-1 text-sm rounded bg-white/5">Decline</button>
        <button onClick={accept} className="px-3 py-1 text-sm rounded bg-accent text-foreground">Accept</button>
      </div>
    </div>
  );
};

export default ConsentBanner;
