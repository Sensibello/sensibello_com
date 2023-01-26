<template>
  <main>
      <div class="warning">
        <p>I'm actively updating my website! Please excuse the dust and check back soon for more projects.</p>
      </div>
    <section class="intro grid">
     
        <p class="intro-text">Fancy meeting you here... my name is</p>
        <h1>Karli Sensibello.</h1>

      <div class="contained-text">
        <h2 class="h3-style">
          <span class="bold-text"> Senior Frontend Developer</span>.
          Currently working at Progressive's in-house marketing agency, <a href="https://weareninety6.com">ninety6</a>.
        </h2>

        <div class="highlights">
          <ul>
            <li>Located in Cleveland, Ohio</li>
            <li>Open to side-projects</li>
          </ul>
        </div>

        <div class="social-links">
          <ul>
            <li class="button-item"><a class="button-style" href="https://www.linkedin.com/in/karlisensi" target="_blank">LinkedIn</a></li>
            <li class="button-item"><a class="button-style" href="https://www.github.com/sensibello" target="_blank">Github</a></li>
            <li class="button-item"><a class="button-style" href="mailto:karli@sensibello.com" target="_blank">Email</a></li>
          </ul>
        </div>

      </div>
     
    </section>


    <section class="about-me top-padding" id="about">
      <h3 class="h2-style">About</h3>
      <div class="contained-text">
        <p>My name is Karli, and I'm from Cleveland, Ohio. From a young age, I have always been interested in technology and creating art.  </p>
        <p>I attended Cleveland State University (2014 - 2017), pursuing a degree in Psychology and Criminology. I had the intention of continuing on to law school after graduation. However, throughout high school and college, I always had an interest in web design. I would design and build simple websites for local businesses and friends in order to pay for college expenses, and I found myself looking forward to working on these side projects.</p>
        <p>I decided after graduating college, I would take a year off before applying to law school, and completely focus on web design and development. The goal was to have a full-time development job that I enjoyed. If, after a year, I didn't enjoy it anymore, or did not find a position I felt happy in, I would go back to the original game-plan of law school. </p>
        <p>I made that decision in 2017 and I haven't regretted it at any point in my career. I love what I do, I genuinely enjoy providing solutions to my clients that not only <em>look great</em>, but function even better. My goal is to always provide intuitive, accessible, personalized solutions to my clients.</p>
      </div>

    </section>

    <section class="">   
      <h3 class="h2-style"> Projects </h3>   
        <p class="intro-text">I'll be adding more projects here shortly, but for now, here's a few websites I built that I'm proud of.</p>

       <posts post-type="projects" :amount="4" />
    </section>

     <section class="">   
      <h3 class="h2-style"> Tech Stack / Skills</h3>
      <p class="intro-text">Recruiters <span class="bold-text">love</span> this section...</p>
      <ul class="grid-list">
        <li>UI / UX Design</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Vue.js (Nuxt)</li>
        <li>HTML / CSS</li>
        <li>SASS / SCSS</li>
        <li>Accessibility Testing</li>
        <li>PHP</li>
        <li>Custom CMS development</li>
        <li>WordPress</li>
        <li>Umbraco</li>
        <li>Razor (.NET)</li>
        <li>Twig (PHP)</li>
        <li>Adobe software</li>
        <li>Figma</li>
        <li>Git</li>
        <li>Bitbucket</li>
        <li>Project mgmt software</li>

      </ul>   
      
    </section>


    <section class="">
      <div class="contained-text">
        <h3 class="h2-style"> Want to get in touch?</h3>

        <div class="social-links">
          <ul>
            <li class="button-item"><a class="button-style" href="https://www.linkedin.com/in/karlisensi" target="_blank">LinkedIn</a></li>
            <li class="button-item"><a class="button-style" href="https://www.github.com/sensibello" target="_blank">Github</a></li>
            <li class="button-item"><a class="button-style" href="mailto:karli@sensibello.com" target="_blank">Email</a></li>
          </ul>
        </div>

         <h3 class="mt-2"> Or, check out my full resume <a href="/sensibello_2023-compressed.pdf" target="_blank">here</a>.</h3>

      </div>
     
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
