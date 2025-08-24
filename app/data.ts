export const actionableItems = [
  {
    message: "Technical Optimization Checklist",
    children: [
      {
        message: "Core Web Vitals Optimization",
        children: [
          {
            message: "LCP under 2.5 seconds",
            example: "Optimize images, preload critical resources",
          },
          {
            message: "CLS under 0.1",
            example: "Reserve space for images, optimize font loading",
          },
          {
            message: "INP under 200ms",
            example: "Optimize JavaScript, break up long tasks",
          },
        ],
      },
      {
        message: "Resource Optimization",
        children: [
          { message: "Enable Gzip/Brotli compression", example: "" },
          { message: "Minify CSS, JavaScript, and HTML", example: "" },
          { message: "Implement browser caching headers", example: "" },
          { message: "Use CDN for static assets", example: "" },
        ],
      },
      {
        message: "Mobile Optimization",
        children: [
          { message: "Mobile-first responsive design", example: "" },
          {
            message: "Touch-friendly interactive elements",
            example: "44px minimum",
          },
          { message: "Viewport meta tag configured", example: "" },
        ],
      },
      {
        message: "Performance Monitoring",
        children: [
          { message: "Core Web Vitals tracking implemented", example: "" },
          { message: "PageSpeed Insights regular monitoring", example: "" },
          { message: "Real User Monitoring (RUM) setup", example: "" },
        ],
      },
    ],
  },
  {
    message: "Structured Data Implementation Checklist",
    children: [
      {
        message: "Schema Markup",
        children: [
          { message: "FAQ schema", example: "For question-answer content" },
          { message: "HowTo schema", example: "For step-by-step guides" },
          {
            message: "Article schema",
            example: "For blog posts and content",
          },
          {
            message: "Organization schema",
            example: "For company information",
          },
          { message: "Breadcrumb schema", example: "For navigation" },
        ],
      },
      {
        message: "Validation and Testing",
        children: [
          { message: "Google Rich Results Test validation", example: "" },
          { message: "Schema markup validator testing", example: "" },
          { message: "Structured data monitoring setup", example: "" },
        ],
      },
    ],
  },
  {
    message: "Content Strategy Checklist",
    children: [
      {
        message: "AI-Optimized Content Structure",
        children: [
          {
            message: "Quick answer sections",
            example: "For key questions",
          },
          { message: "Clear heading hierarchy", example: "H1-H6" },
          { message: "Question-focused content creation", example: "" },
          { message: "Speakable content markup", example: "" },
        ],
      },
      {
        message: "Authority Building",
        children: [
          { message: "Author expertise markup", example: "" },
          { message: "Citations and references included", example: "" },
          { message: "Expert credentials displayed", example: "" },
          { message: "Research-backed content", example: "With data" },
        ],
      },
    ],
  },
  {
    message: "Authority Building Checklist",
    children: [
      {
        message: "Digital Footprint Expansion",
        children: [
          { message: "Multi-platform content strategy", example: "" },
          { message: "Industry relationship building", example: "" },
          { message: "Speaking engagement planning", example: "" },
          { message: "Collaboration opportunities identified", example: "" },
        ],
      },
      {
        message: "Citation-Worthy Content",
        children: [
          { message: "Original research and studies", example: "" },
          { message: "Downloadable resources and datasets", example: "" },
          { message: "Proper citation formatting", example: "" },
          { message: "Industry benchmark data", example: "" },
        ],
      },
    ],
  },
  {
    message: "User Experience Enhancement Checklist",
    children: [
      {
        message: "Navigation Optimization",
        children: [
          { message: "Intent-driven navigation structure", example: "" },
          { message: "Smart search with suggestions", example: "" },
          { message: "Breadcrumb navigation", example: "" },
          { message: "Mobile-friendly navigation", example: "" },
        ],
      },
      {
        message: "Conversion Optimization",
        children: [
          { message: "Performance-optimized UI components", example: "" },
          { message: "Smart CTA placement", example: "" },
          { message: "Progressive form disclosure", example: "" },
          { message: "Social proof integration", example: "" },
          { message: "Trust signals display", example: "" },
        ],
      },
    ],
  },
];
