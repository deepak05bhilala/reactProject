'use client';

export default function WatcherImage() {
  return (
    <div
      style={{
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexDirection: 'column',
        color : 'black'
      }}
    >
      <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>Prachi 🐼</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
          src="/her-image.jpg"
          alt="Her"
          style={{
            width: '100px',
            borderRadius: '50%',
            border: '2px solid pink',

          }}
        />
        <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>👀 Watching you!</span>
      </div>
    </div>
  );
}
