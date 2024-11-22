const path = document.querySelector('.ekg-motion path');
gsap.fromTo(
  path,
  { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() },
  {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    ease: "power2.inOut"
  }
);
  
