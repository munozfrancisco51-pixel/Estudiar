export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 className="heading-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Welcome back, Student
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          Here is what's happening with your studies today.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Study Streak</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
            14 Days
          </div>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Keep it up!</p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Skills Mastered</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
            3 Skills
          </div>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>You're making great progress.</p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Next Session</h3>
          <button className="btn-primary" style={{ width: '100%' }}>
            Start Focus Mode
          </button>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', marginTop: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Activity</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
              <div>
                <h4 style={{ fontWeight: 500 }}>Completed Lesson: React Fundamentals</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Programming Skill</p>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {i} hour{i > 1 ? 's' : ''} ago
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
