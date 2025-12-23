import LogoLoop from '../LoopIcon';

const techLogos = [
  { src: "/Icon/Icon/react-svgrepo-com.svg", alt: "React", title: "React" },
  { src: "/Icon/Icon/tailwindcss-svgrepo-com.svg", alt: "Next.js", title: "Next.js" },
  { src: "/Icon/Icon/html-124-svgrepo-com.svg", alt: "TypeScript", title: "TypeScript" },
  { src: "/Icon/Icon/css3-02-svgrepo-com.svg", alt: "Tailwind CSS", title: "Tailwind CSS" },
  { src: "/Icon/Icon/javascript-155-svgrepo-com.svg", alt: "JavaScript", title: "JavaScript" },
  { src: "/Icon/Icon/php01-svgrepo-com.svg", alt: "PHP", title: "PHP" },
  { src: "/Icon/Icon/mysql-svgrepo-com.svg", alt: "MySQL", title: "MySQL" },
  { src: "/Icon/Icon/nodejs-svgrepo-com.svg", alt: "Node.js", title: "Node.js" },
  { src: "/Icon/Icon/laravel-svgrepo-com.svg", alt: "Laravel", title: "Laravel" },
  { src: "/Icon/Icon/csharp-svgrepo-com.svg", alt: "C#", title: "C#" },
  { src: "/Icon/Icon/git-svgrepo-com.svg", alt: "Git", title: "Git" },
  { src: "/Icon/Icon/github-svgrepo-com.svg", alt: "GitHub", title: "GitHub" },
  { src: "/Icon/Icon/bootstrap-fill-svgrepo-com.svg", alt: "Bootstrap", title: "Bootstrap" },
  { src: "/Icon/Icon/firebase-svgrepo-com.svg", alt: "Firebase", title: "Firebase" },
  { src: "/Icon/Icon/dotnet-svgrepo-com.svg", alt: "DotNet", title: "DotNet" },
  { src: "/Icon/Icon/socket-dot-io-svgrepo-com.svg", alt: "Socket.io", title: "Socket.io" },
  { src: "/Icon/Icon/figma-svgrepo-com.svg", alt: "Figma", title: "Figma" },
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

export default function LoopIcon() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />
    </div>
  );
}