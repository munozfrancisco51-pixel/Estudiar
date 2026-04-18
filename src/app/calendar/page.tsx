export default function CalendarPage() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <h1 className="heading-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Study Calendar
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Plan your activities and stay organized.
        </p>
      </header>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>October 2026</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-purple)' }}>Prev</button>
            <button className="btn-primary">Next</button>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem', textAlign: 'center', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem' }}>
          {days.map(day => (
            <div key={day} className="glass-panel" style={{ 
              padding: '1.5rem 1rem', 
              textAlign: 'center', 
              cursor: 'pointer',
              border: day === 18 ? '2px solid var(--accent-blue)' : '1px solid var(--glass-border)'
            }}>
              <span style={{ fontSize: '1.2rem', fontWeight: day === 18 ? 'bold' : 'normal', color: day === 18 ? 'var(--accent-blue)' : 'inherit' }}>
                {day}
              </span>
              {day % 5 === 0 && (
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)', margin: '0.5rem auto 0' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
