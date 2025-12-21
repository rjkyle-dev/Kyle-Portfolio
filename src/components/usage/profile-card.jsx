import ProfileCard from './Profilecard'
  
<ProfileCard
  name="RJ Kyle G. Labrador"
  title="Full Stack Developer"
  handle="kyle-dev"
  status="Online"
  contactText="Contact Me"
  avatarUrl="public/personal.jpg"
  iconUrl="public/code.svg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>