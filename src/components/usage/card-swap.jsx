import CardSwap, { Card } from 'src/components/Card-Swap'

<div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <img 
        src="/projects/agriyas.png" 
        alt="Agriya Tourist Website"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit'
        }}
      />
    </Card>
    <Card>
      <img 
        src="/projects/kyle-portfolio.png" 
        alt="Kyle's Portfolio"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit'
        }}
      />
    </Card>
    <Card>
      <img 
        src="/projects/smart-child.jpeg" 
        alt="Smart Child"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit'
        }}
      />
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div>