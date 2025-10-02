import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import GitHubActivityFeed from './GitHubActivityFeed';

// Mock the fetch function
global.fetch = vi.fn();

const createFetchResponse = (data: any) => {
  return { json: () => new Promise((resolve) => resolve(data)), ok: true };
};

describe('GitHubActivityFeed', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should display "N/A" for repositories with an invalid updated_at date', async () => {
    const mockRepos = [
      {
        name: 'repo1',
        fork: false,
        stargazers_count: 1,
        language: 'TypeScript',
        updated_at: 'invalid-date', // This will cause the bug
        created_at: '2023-01-01T00:00:00Z',
        topics: [],
        html_url: 'url',
        description: 'desc'
      }
    ];

    (fetch as any).mockResolvedValue(createFetchResponse(mockRepos));

    render(<GitHubActivityFeed />);

    // This test will fail before the fix because the component will render "Invalid Date"
    // instead of "N/A" for the date. We are looking for the fixed output.
    const element = await screen.findByText(/Updated N\/A/i);
    expect(element).toBeInTheDocument();
  });
});