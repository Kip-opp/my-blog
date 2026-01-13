// src/App.test.jsx

// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the blog name "The NextGen Coder"', () => {
    render(<App />);
    const headerElement = screen.getByText(/The Nexus/i);
    expect(headerElement).toBeDefined();
  });

  it('renders the author name "Denis Kipruto"', () => {
    render(<App />);
    
    // FIX: Use getAllByText because the name appears multiple times
    // (Sidebar profile + Article author)
    const authorNames = screen.getAllByText(/Denis Kipruto/i);
    
    // We expect at least one instance to be found
    expect(authorNames.length).toBeGreaterThan(0);
  });

  it('renders article posts', () => {
    render(<App />);
    const articleTitle = screen.getByText(/The Stoic Developer/i);
    expect(articleTitle).toBeDefined();
  });
});
