import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="video-section">
        <div className="video-container">
          <video
            src="/home/AI-homepage-banner_1.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="homepage-video"
          >
            Your browser does not support the video tag.
          </video>
          <div className="video-caption">WORLD OF TECH AND IDEAS</div>
        </div>
      </section>

      <section className="news-section">
        <div className="news-inner">
          <h2 className="news-heading">Tech & AI News</h2>
          <div className="news-grid">
          <a href="https://www.technologyreview.com/2026/01/15/edge-ai-revolution/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://images.unsplash.com/photo-1668395089958-743a664e0a14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVkZ2UlMjBBSSUyMHByb2Nlc3NpbmclMjBvbiUyMGRldmljZXMlMjBFZGdlJTIwQUklMjBSZXZvbHV0aW9uJTNBJTIwUmVhbC1UaW1lJTIwUHJvY2Vzc2luZyUyMGF0JTIwdGhlJTIwRGV2aWNlJTIwTGV2ZWx8ZW58MHx8MHx8fDA%3D" alt="Edge AI processing on devices" />
              <div className="news-content">
                <h3>Edge AI Revolution: Real-Time Processing at the Device Level</h3>
                <p>Edge AI is transforming how we process data locally on devices, enabling faster decision-making without relying on cloud connectivity. From autonomous vehicles to medical devices, the future is becoming increasingly local.</p>
                <div className="news-meta">
                  <span className="news-category tech">Technology</span>
                  <span className="news-date">Jan 15, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.artificialintelligence-news.com/2026/01/14/neural-networks-human-level-recognition/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://images.unsplash.com/photo-1711409664431-4e7914ac2370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmV1cmFsJTIwTmV0d29ya3MlMjBBY2hpZXZlJTIwSHVtYW4tTGV2ZWwlMjBQYXR0ZXJuJTIwUmVjb2duaXRpb258ZW58MHx8MHx8fDA%3D" alt="Neural network visualization" />
              <div className="news-content">
                <h3>Neural Networks Achieve Human-Level Pattern Recognition</h3>
                <p>Breakthrough in computer vision technology allows AI systems to recognize complex patterns with unprecedented accuracy, opening new possibilities in medical diagnostics and autonomous systems.</p>
                <div className="news-meta">
                  <span className="news-category ai">AI</span>
                  <span className="news-date">Jan 14, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.psychologytoday.com/2026/01/13/deep-work-productivity-science/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://picsum.photos/seed/deepwork/800/400" alt="Person focused on work" />
              <div className="news-content">
                <h3>Deep Work Productivity: The Science of Focused Attention</h3>
                <p>Research shows that uninterrupted focused work sessions can boost productivity by up to 500%. Learn the techniques used by top performers to achieve flow state and maximize creative output.</p>
                <div className="news-meta">
                  <span className="news-category self-improvement">Self Improvement</span>
                  <span className="news-date">Jan 13, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.quantamagazine.org/quantum-computing-error-correction-20260112/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://images.unsplash.com/photo-1636054354111-620bb6a7d982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UXVhbnR1bSUyMENvbXB1dGluZyUyMEJyZWFrdGhyb3VnaCUyMGluJTIwRXJyb3IlMjBDb3JyZWN0aW9ufGVufDB8fDB8fHww" alt="Quantum computing visualization" />
              <div className="news-content">
                <h3>Quantum Computing Breakthrough in Error Correction</h3>
                <p>Scientists develop novel error correction techniques that could make quantum computers practical for real-world applications, potentially solving complex optimization problems exponentially faster.</p>
                <div className="news-meta">
                  <span className="news-category tech">Technology</span>
                  <span className="news-date">Jan 12, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.brookings.edu/articles/ai-ethics-innovation-responsibility/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFJJTIwZXRoaWNzJTIwZGlzY3Vzc2lvbiUyMEFJJTIwRXRoaWNzJTNBJTIwQmFsYW5jaW5nJTIwSW5ub3ZhdGlvbiUyMHdpdGglMjBSZXNwb25zaWJpbGl0eXxlbnwwfHwwfHx8MA%3D%3D" alt="AI ethics discussion" />
              <div className="news-content">
                <h3>AI Ethics: Balancing Innovation with Responsibility</h3>
                <p>As AI systems become more autonomous, developers and policymakers grapple with ethical frameworks to ensure AI serves humanity's best interests while minimizing potential risks.</p>
                <div className="news-meta">
                  <span className="news-category ai">AI</span>
                  <span className="news-date">Jan 11, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.health.harvard.edu/blog/mindfulness-apps-mental-health-20260110/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://picsum.photos/seed/mindfulness/800/400" alt="Meditation and mindfulness" />
              <div className="news-content">
                <h3>Mindfulness Apps Show 40% Improvement in Mental Health</h3>
                <p>Study reveals that consistent use of mindfulness and meditation apps correlates with significant improvements in stress reduction, focus, and overall mental well-being.</p>
                <div className="news-meta">
                  <span className="news-category self-improvement">Self Improvement</span>
                  <span className="news-date">Jan 10, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.nature.com/articles/s41586-026-01234-x" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://images.unsplash.com/photo-1668600419854-e231532a95b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEFJLURyaXZlbiUyMERydWclMjBEaXNjb3ZlcnklMjBBY2NlbGVyYXRlcyUyMENPVklELTE5JTIwVHJlYXRtZW50JTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="Drug discovery research" />
              <div className="news-content">
                <h3>AI-Driven Drug Discovery Accelerates COVID-19 Treatment Development</h3>
                <p>Machine learning algorithms have successfully identified potential antiviral compounds, reducing drug discovery time from years to months and demonstrating AI's transformative potential in pharmaceutical research.</p>
                <div className="news-meta">
                  <span className="news-category ai">AI</span>
                  <span className="news-date">Jan 9, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.wired.com/story/blockchain-supply-chain-transparency/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://images.unsplash.com/photo-1629789050264-e5709aa70cb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEJsb2NrY2hhaW4lMjBUZWNobm9sb2d5JTIwUmV2b2x1dGlvbml6ZXMlMjBTdXBwbHklMjBDaGFpbiUyMFRyYW5zcGFyZW5jeXxlbnwwfHwwfHx8MA%3D%3D" alt="Blockchain network visualization" />
              <div className="news-content">
                <h3>Blockchain Technology Revolutionizes Supply Chain Transparency</h3>
                <p>Distributed ledger technology provides unprecedented visibility into global supply chains, enabling consumers to trace products from origin to retail and combat counterfeiting.</p>
                <div className="news-meta">
                  <span className="news-category tech">Technology</span>
                  <span className="news-date">Jan 8, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://hbr.org/2026/01/remote-work-productivity-myths" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://picsum.photos/seed/remotework/800/400" alt="Remote work setup" />
              <div className="news-content">
                <h3>The Truth About Remote Work Productivity</h3>
                <p>New studies debunk common myths about remote work, revealing that flexible arrangements can actually increase productivity by 20-30% when implemented with proper management strategies.</p>
                <div className="news-meta">
                  <span className="news-category self-improvement">Self Improvement</span>
                  <span className="news-date">Jan 7, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.scientificamerican.com/article/brain-computer-interfaces-2026/" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://images.unsplash.com/photo-1675557009875-436f71457475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEJyYWluLUNvbXB1dGVyJTIwSW50ZXJmYWNlcyUyMEVuYWJsZSUyMFRob3VnaHQtdG8tVGV4dCUyMENvbW11bmljYXRpb258ZW58MHx8MHx8fDA%3D" alt="Brain-computer interface technology" />
              <div className="news-content">
                <h3>Brain-Computer Interfaces Enable Thought-to-Text Communication</h3>
                <p>Neural implants achieve breakthrough accuracy in converting brain signals to text, offering new communication pathways for individuals with severe motor disabilities.</p>
                <div className="news-meta">
                  <span className="news-category tech">Technology</span>
                  <span className="news-date">Jan 6, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.economist.com/technology-quarterly/2026-01-05/ai-climate-change" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://picsum.photos/seed/aiclimate/800/400" alt="AI for climate solutions" />
              <div className="news-content">
                <h3>AI's Role in Combating Climate Change</h3>
                <p>Artificial intelligence systems are being deployed to optimize renewable energy grids, predict extreme weather events, and accelerate carbon capture technology development.</p>
                <div className="news-meta">
                  <span className="news-category ai">AI</span>
                  <span className="news-date">Jan 5, 2026</span>
                </div>
              </div>
            </article>
          </a>

          <a href="https://www.nytimes.com/2026/01/04/well/mind/body/meditation-neuroscience.html" target="_blank" rel="noopener noreferrer" className="news-card-link">
            <article className="news-card">
              <img className="news-image" src="https://picsum.photos/seed/meditation/800/400" alt="Brain structure and meditation" />
              <div className="news-content">
                <h3>Meditation Changes Brain Structure: Neuroscience Breakthrough</h3>
                <p>Long-term meditation practice physically alters brain structure, increasing gray matter in areas associated with attention, emotional regulation, and cognitive flexibility.</p>
                <div className="news-meta">
                  <span className="news-category self-improvement">Self Improvement</span>
                  <span className="news-date">Jan 4, 2026</span>
                </div>
              </div>
            </article>
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}