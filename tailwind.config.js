module.exports = {
  mode: 'jit',
  purge: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ],
  theme: {
    fontFamily: {
      'sans': ['Be Vietnam Pro', 'ui-sans-serif', 'system-ui'],
      // 'serif': ['Be Vietnam Pro', 'ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      // 'body': ['"Be Vietnam Pro"']
    }
  }
}
