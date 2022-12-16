export default {
    props: { message: String } , 
    template: `
      <h2>{{ message || 'No props passed yet' }}</h2>
      `
}