import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const terminalLines = [
  { text: '> Initializing KERN AI Homelab...', delay: 0 },
  { text: '> Loading modules: [Docker, Tailscale, Notion]', delay: 100 },
  { text: '> Connecting to Tencent VPS...', delay: 300 },
  { text: '> Connecting to Contabo VPS...', delay: 500 },
  { text: '> ══════════════════════════════════════', delay: 700 },
  { text: '> ✅ SYSTEM ONLINE', delay: 900 },
  { text: '> Ready to serve, Boss! 🦾', delay: 1100 },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal p-6 font-mono text-sm relative overflow-hidden">
      <div className="scanlines absolute inset-0 pointer-events-none" />
      <div className="relative z-10">
        {terminalLines.slice(0, visibleLines + 1).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-1"
            style={{ color: line.text.includes('✅') || line.text.includes('🦾') ? '#ff6b35' : '#fafafa' }}
          >
            {line.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-brutalist"
    >
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-muted">{description}</p>
    </motion.div>
  );
}

function TechStack({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="px-4 py-2 bg-secondary border-2 border-border hover:border-primary transition-colors duration-200"
    >
      {name}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b-2 border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            KERN<span className="text-primary">.AI</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6"
          >
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#stack" className="hover:text-primary transition-colors">Stack</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                AI Homelab
                <br />
                <span className="text-primary">Assistant</span>
              </h1>
              <p className="text-xl text-muted mb-8 leading-relaxed">
                Your personal AI butler for infrastructure automation.
                Docker management, security monitoring, Notion integration.
                Built with OpenClaw.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn-brutalist">
                  Get Started
                </button>
                <button className="btn-brutalist !bg-transparent !text-foreground hover:!bg-secondary">
                  View Docs
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="🐳 Docker Automation"
              description="Auto-deploy containers, manage compose stacks, monitor health with Tailscale security."
              delay={0}
            />
            <FeatureCard
              title="🔒 Security First"
              description="Automated security audits, port monitoring, SSH hardening. Your VPS, secured."
              delay={0.1}
            />
            <FeatureCard
              title="📝 Notion Integration"
              description="Log expenses, track ideas, manage todos. All synced to your Notion workspace."
              delay={0.2}
            />
            <FeatureCard
              title="⏰ Smart Reminders"
              description="Calendar sync, daily check-ins, automated reports. Never miss important events."
              delay={0.3}
            />
            <FeatureCard
              title="🧠 Context Memory"
              description="Remembers conversations, learns preferences, maintains continuity across sessions."
              delay={0.4}
            />
            <FeatureCard
              title="🦾 Always On"
              description="24/7 monitoring, proactive alerts, cron jobs. Your homelab never sleeps."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Tech Stack
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            <TechStack name="OpenClaw" delay={0} />
            <TechStack name="Docker" delay={0.05} />
            <TechStack name="Tailscale" delay={0.1} />
            <TechStack name="Notion API" delay={0.15} />
            <TechStack name="Telegram Bot" delay={0.2} />
            <TechStack name="Vite + React" delay={0.25} />
            <TechStack name="TypeScript" delay={0.3} />
            <TechStack name="Tailwind CSS" delay={0.35} />
            <TechStack name="Framer Motion" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t-2 border-border px-6 py-12 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">KERN.AI</h3>
            <p className="text-muted mb-6">Your AI Homelab Assistant 🦾</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
              <a href="#" className="hover:text-primary transition-colors">Email</a>
            </div>
            <p className="mt-8 text-sm text-muted">
              Built with OpenClaw • Frontend Design Ultimate • Brutalist Theme
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
