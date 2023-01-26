<template>
  <main>
    <section class="">
      
    </section>

    <section class="">
      <h1>About</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <span>This is some span text</span>
      <p>This is some paragraph text</p>
      <a href=""> This is an example of a link</a>
      <button>I am a button</button>
       <posts post-type="projects" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
