export default {
  server: {
    port: 3000  // Change this to your desired port number
  },
  build: {
    rollupOptions: {
      external: ['/assets/images/download.png'],
    },
  }
}

