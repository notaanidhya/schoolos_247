'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Lock } from 'lucide-react';
import styles from './BookDemo.module.css';

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    role: 'Principal / School Head',
    phone: '',
    email: '',
    city: '',
    studentCount: '500-1000',
    existingSystem: 'Spreadsheets / Registers',
    preferredDate: '',
    notes: '',
  });

  const [selectedModules, setSelectedModules] = useState<string[]>([
    'Attendance & Parent App',
    'Fees & Payments',
  ]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleModule = (moduleName: string) => {
    if (selectedModules.includes(moduleName)) {
      setSelectedModules(selectedModules.filter((m) => m !== moduleName));
    } else {
      setSelectedModules([...selectedModules, moduleName]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          modules: selectedModules,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit demo request.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left Column: Trust signals, what to expect, badges */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} />
              <span>LIVE INTERACTIVE DEMO</span>
            </div>

            <h1 className={styles.headline}>
              Experience how SchoolOS simplifies your school’s daily operations.
            </h1>

            <p className={styles.desc}>
              Join a 25-minute personalized demo tailored to your school’s size,
              board affiliation (CBSE, ICSE, State), and operational bottlenecks.
            </p>

            <div className={styles.walkthroughBox}>
              <h3 className={styles.boxTitle}>What happens during your 25-min session:</h3>
              <ul className={styles.walkthroughList}>
                <li>
                  <div className={styles.stepNum}>1</div>
                  <div>
                    <strong>Operational Assessment</strong>
                    <span>We evaluate where your staff loses the most hours (admissions, attendance, fee follow-ups).</span>
                  </div>
                </li>
                <li>
                  <div className={styles.stepNum}>2</div>
                  <div>
                    <strong>Live Interactive Demo</strong>
                    <span>See the administrator console, teacher roll-call interface, and parent mobile app in action.</span>
                  </div>
                </li>
                <li>
                  <div className={styles.stepNum}>3</div>
                  <div>
                    <strong>ERP Coexistence & Roadmap</strong>
                    <span>How SchoolOS connects with your existing setup with zero data loss or operational disruption.</span>
                  </div>
                </li>
                <li>
                  <div className={styles.stepNum}>4</div>
                  <div>
                    <strong>Customized School Proposal</strong>
                    <span>Transparent institutional pricing aligned with your exact student enrollment and active modules.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>DPDP Act & Student Data Privacy Compliant</span>
              </div>
              <div className={styles.trustItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>No-obligation, 100% Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form or Success State */}
          <div className={styles.rightCol}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}><CheckCircle2 size={44} color="#10B981" /></div>
                <h2 className={styles.successTitle}>Demo Request Confirmed!</h2>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.fullName}</strong>. We have received your demo request for{' '}
                  <strong>{formData.schoolName}</strong>.
                </p>
                <div className={styles.nextSteps}>
                  <h4>What happens next?</h4>
                  <ol>
                    <li>Our School Success Manager will call or WhatsApp you at <strong>{formData.phone}</strong> within 4 business hours to lock in your preferred date.</li>
                    <li>We will prepare a customized sandbox environment pre-configured with sample classes.</li>
                    <li>You will receive a Google Meet / Zoom invitation with calendar link.</li>
                  </ol>
                </div>
                <div className={styles.successActions}>
                  <Link href="/" className="btn btn-primary">
                    Return to Homepage
                  </Link>
                  <Link href="/platform" className="btn btn-outline">
                    Explore Platform Features
                  </Link>
                </div>
              </div>
            ) : (
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Schedule Your School Demo</h2>
                  <p className={styles.formSub}>Fill out the details below. We respond within 4 business hours.</p>
                </div>

                {errorMsg && <div className={styles.errorAlert}>{errorMsg}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName">Your Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="role">Your Role / Designation *</label>
                      <select id="role" name="role" value={formData.role} onChange={handleChange}>
                        <option value="School Owner / Trustee">School Owner / Trustee</option>
                        <option value="Principal / School Head">Principal / School Head</option>
                        <option value="Administrator / Director">Administrator / Director</option>
                        <option value="Academic Coordinator">Academic Coordinator</option>
                        <option value="Teacher / Faculty">Teacher / Faculty</option>
                        <option value="Other">Other Decision Maker</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="schoolName">School / Institution Name *</label>
                      <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        required
                        placeholder="e.g. Delhi Public Academy"
                        value={formData.schoolName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="city">City / State *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        placeholder="e.g. Jaipur, Rajasthan"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Official Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="principal@school.edu.in"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="studentCount">Approximate Student Strength *</label>
                      <select
                        id="studentCount"
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleChange}
                      >
                        <option value="Under 300">Under 300 Students</option>
                        <option value="300-600">300 to 600 Students</option>
                        <option value="600-1200">600 to 1,200 Students</option>
                        <option value="1200-2500">1,200 to 2,500 Students</option>
                        <option value="2500+">2,500+ Students (Multi-Campus)</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="existingSystem">Current Software in Use</label>
                      <select
                        id="existingSystem"
                        name="existingSystem"
                        value={formData.existingSystem}
                        onChange={handleChange}
                      >
                        <option value="Spreadsheets / Registers">Paper Registers & Excel</option>
                        <option value="WhatsApp Groups">WhatsApp Groups</option>
                        <option value="Legacy Desktop ERP">Old Desktop ERP</option>
                        <option value="Cloud ERP">Other Cloud School ERP</option>
                        <option value="None">None</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Modules you want to explore:</label>
                    <div className={styles.checkboxGrid}>
                      {[
                        'Attendance & Parent App',
                        'Admissions Pipeline',
                        'Fees & UPI Payments',
                        'Academics & Report Cards',
                        'School Broadcasts / SMS',
                        'AI Operations Assistant',
                      ].map((mod) => (
                        <label key={mod} className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            checked={selectedModules.includes(mod)}
                            onChange={() => toggleModule(mod)}
                          />
                          <span>{mod}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="preferredDate">Preferred Demo Date / Timing</label>
                    <input
                      type="text"
                      id="preferredDate"
                      name="preferredDate"
                      placeholder="e.g. Tomorrow afternoon around 3 PM"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="notes">Current Operational Challenges (Optional)</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      placeholder="e.g. Parents complain about missing homework, fee follow-ups take too much staff time..."
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn btn-primary ${styles.submitBtn}`}
                  >
                    {loading ? 'Submitting Request...' : 'Book Your Free Live Demo →'}
                  </button>

                  <div className={styles.formFooterNotice} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <Lock size={14} color="#64748B" /> Your contact information is never shared. Strict DPDP Act privacy maintained.
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
