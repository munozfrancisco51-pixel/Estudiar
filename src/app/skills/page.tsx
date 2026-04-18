export default function SkillsPage() {
  const mockSkills = [
    { title: "React Development", category: "Programming", progress: 75 },
    { title: "Advanced English", category: "Languages", progress: 40 },
    { title: "UI/UX Design", category: "Design", progress: 90 },
    { title: "Creadora de Skills", category: "System", progress: 100 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="heading-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            My Skills
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Track everything you are learning from your Markdown files.
          </p>
        </div>
        <button className="btn-primary">+ Add Skill</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {mockSkills.map((skill, index) => (
          <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'inline-block', padding: '0.2rem 0.8rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, background: 'rgba(124, 58, 237, 0.2)', color: '#c4b5fd', width: 'max-content' }}>
              {skill.category}
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>{skill.title}</h3>
            
            <div style={{ marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                <span>Progress</span>
                <span>{skill.progress}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--bg-primary)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${skill.progress}%`, height: '100%', background: 'var(--gradient-accent)', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
