import { Building2, Users, Sparkles } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Connect your school',
    desc: 'Set up school information, classes, staff, roles and workflows. Existing system integrations can be configured where supported.',
    icon: <Building2 size={24} color="#2563EB" />,
    color: '#2563EB',
  },
  {
    num: '02',
    title: 'Bring everyone together',
    desc: 'Connect administrators, teachers and parents through structured workflows, communication channels and digital requests.',
    icon: <Users size={24} color="#10B981" />,
    color: '#10B981',
  },
  {
    num: '03',
    title: 'Automate and improve',
    desc: 'Introduce workflow automation, notifications and AI assistance with appropriate human approvals at every step.',
    icon: <Sparkles size={24} color="#6366F1" />,
    color: '#6366F1',
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimateOnScroll>
          <div className={styles.header}>
            <div className="badge badge--blue">How It Works</div>
            <h2 className="heading-lg">
              Up and running in <span className="gradient-text">three steps</span>
            </h2>
            <p className="lead" style={{ maxWidth: '520px', textAlign: 'center' }}>
              School247 is designed to fit around your school — not the other way around.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 150}>
              <div className={styles.step}>
                <div className={styles.stepLeft}>
                  <div className={styles.stepNum} style={{ '--step-color': step.color } as React.CSSProperties}>
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && <div className={styles.connector} />}
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon} style={{ '--step-color': step.color } as React.CSSProperties}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
