module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      fontFamily: {
        blex: ["IBM Plex Mono", "monospace"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
