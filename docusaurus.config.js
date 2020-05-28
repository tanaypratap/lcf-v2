module.exports = {
  title: "learncodingfree",
  tagline: "need to come up with a tagline",
  url: "https://learncodingfre.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "learncodingfree", // Usually your GitHub org/user name.
  projectName: "learncodingfree.org", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "learncodingfree",
      logo: {
        alt: "learncodingfree logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "courses/",
          activeBasePath: "courses",
          label: "Courses",
          position: "left",
        },
        {
          to: "mentorship/",
          label: "Mentorship",
          position: "left",
        },
        {
          to: "podcasts/",
          activeBasePath: "podcasts",
          label: "Podcasts",
          position: "left",
        },
        {
          to: "faqs/",
          activeBasePath: "faqs",
          label: "faqs",
          position: "left",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          path: "courses",
          routeBasePath: "courses",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/", // TODO
        },
        blog: {
          routeBasePath: "mentorship",
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/", // TODO
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "podcasts",
        /**
         * URL for editing a podcasts post.
         * Example: 'https://github.com/facebook/docusaurus/edit/master/website/podcasts/'
         */
        editUrl:
          "https://github.com/facebook/docusaurus/edit/master/website/podcasts/",
        /**
         * URL route for the podcasts section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "podcasts",
        include: ["*.md", "*.mdx"],
        postsPerPage: 10,
        // /**
        //  * Theme components used by the podcasts pages.
        //  */
        // blogListComponent: "@theme/BlogListPage",
        // blogPostComponent: "@theme/BlogPostPage",
        // blogTagsListComponent: "@theme/BlogTagsListPage",
        // blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
        /**
         * Remark and Rehype plugins passed to MDX.
         */
        // remarkPlugins: [
        //   /* require('remark-math') */
        // ],
        rehypePlugins: [],
        /**
         * Custom Remark and Rehype plugins passed to MDX before
         * the default Docusaurus Remark and Rehype plugins.
         */
        // beforeDefaultRemarkPlugins: [],
        // beforeDefaultRehypePlugins: [],
        /**
         * Truncate marker, can be a regex or string.
         */
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        /**
         * Show estimated reading time for the blog post.
         */
        showReadingTime: true,
        /**
         * Blog feed.
         * If feedOptions is undefined, no rss feed will be generated.
         */
        // feedOptions: { // All comments are TODO
        //   type: "", // required. 'rss' | 'feed' | 'all'
        //   title: "", // default to siteConfig.title
        //   description: "", // default to  `${siteConfig.title} Blog`
        //   copyright: "",
        //   language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        // },
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "faqs",
        /**
         * URL for editing a faqs post.
         * Example: 'https://github.com/facebook/docusaurus/edit/master/website/faqs/'
         */
        editUrl:
          "https://github.com/facebook/docusaurus/edit/master/website/faqs/",
        /**
         * URL route for the faqs section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "faqs",
        include: ["*.md", "*.mdx"],
        postsPerPage: 10,
        // /**
        //  * Theme components used by the faqs pages.
        //  */
        // blogListComponent: "@theme/BlogListPage",
        // blogPostComponent: "@theme/BlogPostPage",
        // blogTagsListComponent: "@theme/BlogTagsListPage",
        // blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
        /**
         * Remark and Rehype plugins passed to MDX.
         */
        // remarkPlugins: [
        //   /* require('remark-math') */
        // ],
        rehypePlugins: [],
        /**
         * Custom Remark and Rehype plugins passed to MDX before
         * the default Docusaurus Remark and Rehype plugins.
         */
        // beforeDefaultRemarkPlugins: [],
        // beforeDefaultRehypePlugins: [],
        /**
         * Truncate marker, can be a regex or string.
         */
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        /**
         * Show estimated reading time for the blog post.
         */
        showReadingTime: true,
        /**
         * Blog feed.
         * If feedOptions is undefined, no rss feed will be generated.
         */
        // feedOptions: { // All comments are TODO
        //   type: "", // required. 'rss' | 'feed' | 'all'
        //   title: "", // default to siteConfig.title
        //   description: "", // default to  `${siteConfig.title} Blog`
        //   copyright: "",
        //   language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        // },
      },
    ],
  ],
};
