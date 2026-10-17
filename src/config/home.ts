export interface HomePost {
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  href: string;
}

export const homePage = {
  description:
    'Frontend development, web experiences, animation, video, and creative content.',

  hero: {
    title: 'I build digital things that look good, move well, and actually work.',
    subtitle:
      'Frontend development, web design, animation, video, and social storytelling for brands, businesses, and ideas worth building.',
  },

  sections: [
{
  type: 'services',
  id: 'services',
  eyebrow: 'What I do',
  title: 'Code, style, motion, and creative content.',

  items: [
    {
      tag: 'CODE',
      title: 'Web & applications',
      description:
        'I build responsive websites and web applications with React, JavaScript, and modern frontend tools. I also work with WordPress, including custom themes and plugins.',
      details:
        'React · JavaScript · Astro · WordPress · Plugins · Custom themes',
      icon: '/images/hero/icon1.png',
    },

    {
      tag: 'STYLE & MOTION',
      title: 'Styling & animation',
      description:
        'I bring interfaces to life with custom styling and animation, from polished transitions to interactive experiences that actually have a reason to move.',
      details:
        'SCSS · GSAP · Lottie · Web animation',
      icon: '/images/hero/icon2.png',
    },

    {
      tag: 'CREATIVE',
      title: 'Video & visual content',
      description:
        'I create and edit visual content for digital projects, from social videos and motion graphics to After Effects animation and illustration.',
      details:
        'Premiere Pro · After Effects · Illustration · Motion graphics',
      icon: '/images/hero/icon3.png',
    },

    {
      tag: 'STORY TELLING',
      title: 'Content & social',
      description:
        'I create short-form content and help shape ideas for social media, with a focus on clear storytelling, engaging formats, and content that people actually want to watch.',
      details:
        'Social media · Content strategy · Optimization · Short-form video',
      icon: '/images/hero/icon4.png',
    },
  ],
},



    {
      type: 'about',
      id: 'about',
      eyebrow: 'About',
      title: 'Developer by logic. Creative by nature.',
      image: '/images/profile_image.png',

      paragraphs: [
        'I’m a frontend developer and creative based in Berlin, Germany, with more than 10 years of experience building websites, digital experiences, and creative content.',
        'My background sits somewhere between code and creativity. I work with JavaScript, React, WordPress, SCSS, animation, and motion, and I also create and edit video content. I like bringing these skills together to make digital work that looks good, feels natural to use, and has a clear purpose.',
        'After more than a decade in the industry, I’ve learned that good work isn’t just about knowing the tools. It’s about understanding the idea, finding the right solution, and making the final result feel simple.',
        'I work with businesses, brands, and people who have something worth building, and I enjoy taking projects from the initial idea through to the finished product.',
      ],
    },

    {
      type: 'contact',
      id: 'contact',
      eyebrow: 'Have a project?',
      title: 'Let’s build something worth showing off.',

      description:
        'Let’s spend 15 minutes talking through your ideas, figuring out what you need, and seeing how I can help make it happen.',
    },
  ],

  posts: [
    {
      category: 'Design',
      title: 'The Algorithm Doesn\'t Hate You. Your Videos Suck.',
      excerpt: 'Stuck at 200 views? Maybe you don\'t need to post more. Maybe you need a better idea, a better hook, and a little honesty.',
      publishedAt: 'May 2026',
      href: '/posts/The_Algorithm_Hate%20You/',
    },
    {
      category: 'Development',
      title: 'Building better animations with GSAP',
      excerpt: 'Tips for creating smooth, performant animations that feel natural and responsive to user interactions.',
      publishedAt: 'Oct 2024',
      href: '/posts/building-better-animations-with-gsap/',
    },
    {
      category: 'Design',
      title: 'The art of micro-interactions',
      excerpt: 'Small animations that make a big difference. Exploring how subtle motion can improve user experience.',
      publishedAt: 'Sep 2024',
      href: '/posts/the-art-of-micro-interactions/',
    },
    {
      category: 'Thoughts',
      title: 'Code, creativity, and constraints',
      excerpt: 'Finding the balance between technical limitations and creative ambition in web development.',
      publishedAt: 'Aug 2024',
      href: '/posts/code-creativity-and-constraints/',
    },
    {
      category: 'Creative',
      title: 'Why motion matters in UX',
      excerpt: 'Motion is not decoration. It\'s a tool for communication, feedback, and creating delight.',
      publishedAt: 'Jul 2024',
      href: '/posts/why-motion-matters-in-ux/',
    },
    {
      category: 'Frontend',
      title: 'Making responsive layouts feel intentional',
      excerpt: 'A few thoughtful layout choices can make a website feel at home on every screen size.',
      publishedAt: 'Jun 2024',
      href: '/posts/making-responsive-layouts-feel-intentional/',
    },
    {
      category: 'Design',
      title: 'Accessibility belongs in the creative process',
      excerpt: 'Semantic HTML, keyboard support, and clear contrast help make expressive interfaces work for more people.',
      publishedAt: 'May 2024',
      href: '/posts/accessibility-belongs-in-the-creative-process/',
    },
  ] as const,
} as const;