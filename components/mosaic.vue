<template>
    <section class="section-gallery">
        <div class="mosaic wrap" data-module="mosaic" data-band-start="" data-ignore-spacing="">
            <div class="grid">
                <div class="image grid-l4  grid-m5 grid-s6 l-s1 grid-t7 l-t0">
                    <div class="inner">
                        <div class="img1"><img class="item-image" :src="require(`~/assets/images/${imageOne}`)"/></div>   
                        <div class="img2"><img class="item-image" :src="require(`~/assets/images/${imageTwo}`)"/></div>
                        <div class="img3"><img class="item-image" :src="require(`~/assets/images/${imageThree}`)"/></div>
                        <div class="img4"><img class="item-image" :src="require(`~/assets/images/${imageFour}`)"/></div>
                    </div>
                </div>

                <div class="copy grid-l8 grid-m6 l-m0 grid-s12">
                    <h3 class="h2-style">About</h3>
                        <div class="contained-text">
                            <p>My name is Karli, and I'm from Cleveland, Ohio. From a young age, I have always been interested in technology and creating art.  </p>
                            <p>I attended Cleveland State University (2014 - 2017), pursuing a degree in Psychology and Criminology. I had the intention of continuing on to law school after graduation. However, throughout high school and college, I always had an interest in web design. I would design and build simple websites for local businesses and friends in order to pay for college expenses, and I found myself looking forward to working on these side projects.</p>
                            <p>I decided after graduating college, I would take a year off before applying to law school, and completely focus on web design and development. The goal was to have a full-time development job that I enjoyed. If, after a year, I didn't enjoy it anymore, or did not find a position I felt happy in, I would go back to the original game-plan of law school. </p>
                            <p>I made that decision in 2017 and I haven't regretted it at any point in my career. I love what I do, I genuinely enjoy providing solutions to my clients that not only <em>look great</em>, but function even better. My goal is to always provide intuitive, accessible, personalized solutions to my clients.</p>
                        </div>
                </div>
            </div>
        </div>

    </section>
</template>



<script>

export default {
	name: 'mosaic',
	props: {
        imageOne: {
            type: String
        },
        imageTwo: {
            type: String
        },
        imageThree: {
            type: String
        },
        imageFour: {
            type: String
        }
		// items: {
        //     type: Array
        // }
	},
	
}
</script>

<style lang="scss">
// .wrap {
//     max-width: 1270px;
// }
.mosaic {
    padding-bottom: 30px;
    padding-top: 30px;

    .image {
        margin-top: -20%;
    }

    .copy {
        padding: 0;
    }

    .inner {
        position: relative;
        line-height: 0
    }
    img {
        width: 75%
    }
    .img2 {
        width: 100%;
        margin-left: 0%;
        margin-top: 16px
    }
    .img3 {
        position: absolute;
        bottom: calc(55% + 16px);
       left: calc(80% - 10px);
        width: 85%;
    }

    .img4 {
        position: absolute;
        top: 45%;
       left: calc(80% - 10px);
        width: 90%;
    }

}

.mosaic>.grid {
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

@media only screen and (max-width: 1400px) {
    .mosaic img {
        overflow:hidden
    }

    .mosaic .img3 img,.mosaic .img4 img {
        transform: translateX(-25%)
    }
}

@media only screen and (max-width: 1200px) {
    .mosaic .copy {
        margin-left:0
    }

}

@media only screen and (max-width: 900px) {
    .mosaic.wrap {
        padding-bottom:0;
        padding-top: 0
    }

    .mosaic .grid {
        -ms-flex-direction: column;
        flex-direction: column
    }

    .mosaic .image {
        -ms-flex: auto 0 0;
        flex: auto 0 0;
        width: 100%
    }

    .mosaic img {
        width: 100%;
    }

    .mosaic .img2 {
        width: 65%;
        margin-left: 35%;
        margin-top: 12px
    }

    .mosaic .img3 {
        bottom: calc(60% + 12px);
        left: calc(100% + 12px);
        width: 48%
    }

    .mosaic .img3 img {
        transform: none
    }

    .mosaic .img4 {
        top: 40%;
        left: calc(100% + 12px);
        width: 65%
    }

    .mosaic .img4 img {
        transform: none
    }

    .mosaic .copy {
        -ms-flex: auto 0 0;
        flex: auto 0 0;
        margin-top: 50px;
        max-width: 100%;
        text-align: left
    }
}

@media only screen and (max-width: 970px) {
    .mosaic .script {
        font-size:80px
    }
}

@media only screen and (max-width: 670px) {
    .mosaic .img1 {
        width:calc(100% + 30px);
        margin-left: -30px
    }

    .mosaic .img2 {
        width: 75%;
        margin-left: 25%;
        margin-top: 12px
    }

    .mosaic .img3 {
        bottom: calc(65% + 12px)
    }

    .mosaic .img4 {
        top: 35%;
        width: 85%
    }

    .mosaic .script {
        font-size: 56px
    }
}

</style>
