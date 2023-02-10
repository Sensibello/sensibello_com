<template>
  <main>
      <div class="warning">
        <p>I'm actively updating my website! Please excuse the dust and check back soon for more projects.</p>
      </div>
    <section class="intro" id="intro">
     
        <p class="intro-text">Fancy meeting you here... my name is</p>
        <h1>Karli Sensibello.</h1>

      <div class="contained-text">
        <h2 class="h3-style">
          <span class="bold-text"> Senior Frontend Developer</span>.
          Currently working at Progressive's in-house marketing agency, <a href="https://weareninety6.com">ninety6</a>.
        </h2>

        <div class="highlights">
          <ul>
            <li><svgz class="icon" src="location.svg" />Located in Cleveland, Ohio</li>
            <li><svgz class="icon" src="check.svg" />Open to side-projects</li>
          </ul>
        </div>

        <div class="social-links">
          <ul>
            <li class="button-item">
                <a class="button-style" href="https://www.linkedin.com/in/karlisensi" target="_blank">
                <svgz class="icon" src="linkedin.svg" />
                LinkedIn
              </a>
            </li>
            <li class="button-item">
              <a class="button-style" href="https://www.github.com/sensibello" target="_blank">
              <svgz class="icon" src="github.svg" />
              Github
              </a>
            </li>
            <li class="button-item">
              <a class="button-style" href="mailto:karli@sensibello.com" target="_blank">
               <svgz class="icon" src="email.svg" />
                Email
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>

<!-- Mosaic Gallery + About -->

  <mosaic                     
          imageOne="karli_headshot_2.jpg"
          imageTwo="karli-dexter-2.jpg"
          imageThree="karli_headshot.jpeg"
          imageFour="dexter-dwight.png"
        
    />

<!-- Mosaic Gallery + About -->

    <!-- <section class="about-me top-padding" id="about">
      

    </section> -->
    

    <section class="" id="projects">   
        <div class="grid color-example">
          <div class="grid-l4 grid-m12">
            <h3 class="h2-style"> Projects </h3>   
              <p class="intro-text">I'll be adding more projects here shortly, but for now, here's a few websites I built that I'm proud of.</p>
             
             <div class="button-item mt4">
                <a class="button-style" href="/projects">
                  See all projects
                </a>
              </div>
          </div>

          <div class="grid-l8 grid-m12">
            <posts post-type="projects" :amount="4" />
          </div>
      </div>  
    </section>

     <section class="">   
      <h3 class="h2-style"> Tech Stack / Skills</h3>
      <p class="intro-text">Recruiters <span class="bold-text">love</span> this section...</p>
      <p class="small-text">*Green boxes designate tech / languages I am currently using.</p>
      <ul class="grid-list">
        <li class="current">UI / UX Design</li>
        <li class="current">JavaScript</li>
        <li class="current">jQuery</li>
        <li class="current">Vue.js (Nuxt)</li>
        <li class="current">HTML / CSS</li>
        <li class="current">SASS / SCSS</li>
        <li class="current">Accessibility Testing</li>
        <li class="current">PHP</li>
        <li>Custom CMS development</li>
        <li class="current">WordPress</li>
        <li>Umbraco</li>
        <li>Razor (.NET)</li>
        <li>Twig (PHP)</li>
        <li class="current">Adobe software</li>
        <li>Figma</li>
        <li class="current">Git</li>
        <li>Bitbucket</li>
        <li class="current">Project mgmt software</li>
        <li class="current">Node.js</li>
        <li class="current">NPM</li>
      </ul>   
      
    </section>


    <section class="">
      <div class="contained-text">
        <h3 class="h2-style"> Want to get in touch?</h3>

        <div class="social-links">
          <ul>
            <li class="button-item">
                <a class="button-style" href="https://www.linkedin.com/in/karlisensi" target="_blank">
                <svgz class="icon" src="linkedin.svg" />
                LinkedIn
              </a>
            </li>
            <li class="button-item">
              <a class="button-style" href="https://www.github.com/sensibello" target="_blank">
              <svgz class="icon" src="github.svg" />
              Github
              </a>
            </li>
            <li class="button-item">
              <a class="button-style" href="mailto:karli@sensibello.com" target="_blank">
               <svgz class="icon" src="email.svg" />
                Email
              </a>
            </li>
          </ul>
        </div>

         <h3 class="mt-2"> Or, check out my full resume <a href="/sensibello_2023-compressed.pdf" target="_blank">here</a>.</h3>

      </div>
     
    </section>

  </main>
</template>

<script>
import svgz from "~/components/global/svgz.vue";
import mosaic from "~/components/mosaic.vue";
export default {
  components: {
        svgz,
        mosaic
    },

  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
