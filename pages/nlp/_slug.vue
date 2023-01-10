<template>
<div class="flex">

    <div class="hidden md:block min-w-fit max-w-max py-10 px-8 border-r border-slate-600 min-h-screen">

        <div class="font-semibold text-slate-600 text-xl mb-4">{{currilist[0]["name"]}}</div>

        <div>
            
            <div v-for="j in 10" :key="j">
                <div v-if="cats[`cat_${j}`]!=null">
                    <div class="font-medium text-slate-600 text-lg mb-2.5">{{`${cats[`cat_${j}`]}`}}</div>
                    <div v-for='list of lists[`list_${j}`]' :key="list" class="pl-5">
                                <div class="group">
                                    <div class="keep-all text-slate-600 text mb-2 group-hover:text-blue-500 transition duration-200 nav-item">
                                        <nuxt-link :to="{path: `/${currititle}/${list.slug}`}" replace class="nav-item">
                                        {{list.slug}}. {{list.title}}
                                        </nuxt-link>
                                    </div>
                                </div>
                    </div>
                </div>
                <div v-else></div>
            </div>

        </div>

        <div class="pt-3.5 text-sm text-slate-400">커리 개발: {{currilist[0]["authors"][0]}} {{currilist[0]["authors"][1]}} {{currilist[0]["authors"][2]}} {{currilist[0]["authors"][3]}}</div>

    </div>

    <div class="w-full">

        <!-- 헤더  -->

        <div class="px-5 md:px-10 py-0 md:py-2">
            <div class="border-b border-slate-400 h-16 mx-auto flex items-center justify-between">
                    <div class="flex">
                        <div class="md:hidden flex content-center">
                            <button @click="drawer">
                            <Menu class="mr-1"/>
                            </button>
                        </div>
                        <nuxt-link to='/'> <Logo class="drop-shadow-sm pl-2" /> </nuxt-link>
                    </div>
                    <div class="group pr-3">
                        <a href="https://github.com/Team-COSADAMA" target="blank" class="">
                            <GithubLogo />
                        </a>
                    </div>
            </div>
            <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
                    <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
                </div>
            </transition>

            <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
                
                <div class="close">
                <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
                    <Close />
                </button>
                </div>

                <div class="px-4">
                    <div class="font-semibold text-slate-600 pt-10 text-lg mb-4">{{currilist[0]["name"]}}</div>

                    <div>

                        <div v-for="j in 10" :key="j">
                            <div v-if="cats[`cat_${j}`]!=null">
                                <div class="font-medium text-slate-600 mb-2.5">{{`${cats[`cat_${j}`]}`}}</div>
                                <div v-for='list of lists[`list_${j}`]' :key="list" class="pl-5">
                                            <div class="group">
                                                <div class="keep-all text-slate-600 text-sm mb-2 group-hover:text-blue-500 transition duration-200 nav-item">
                                                    <nuxt-link :to="{path: `/${currititle}/${list.slug}`}" replace class="nav-item">
                                                    {{list.slug}}. {{list.title}}
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                </div>
                            </div>
                            <div v-else></div>
                        </div>

                    </div>

                    <div class="pt-3.5 text-sm text-slate-400 mb-10">커리 개발: {{currilist[0]["authors"][0]}} {{currilist[0]["authors"][1]}} {{currilist[0]["authors"][2]}} {{currilist[0]["authors"][3]}}</div>
                </div>

            </aside>
        </div>

        <!-- 커리큘럼  -->

        <div class="max-w-5xl pt-8 pb-24 px-6 md:px-11 mx-auto">
            <p class="custom-text leading-normal mb-6 text-base md:text-lg text-slate-600 font-medium">{{curriname.category}} > {{curriname.slug}}. {{curriname.title}}</p>
            <p class="custom-text leading-normal mb-8 text-2xl md:text-3xl text-slate-800 font-semibold">{{curriname.title}}</p>

            <nuxt-content :document="curriname" class="prose prose-quoteless max-w-5xl custom-text"/>

            <div class="text-right mt-8 mb-6 px-2 text-xs md:text-sm text-slate-400">
                마지막으로 업데이트 된 날짜: <br class="block md:hidden" /> {{formatDate(curriname.updatedAt)}}
            </div>

            <Prevnext :prev="prev" :next="next" :currititle="currititle" />

        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
        isOpen: false
        };
    },
    methods: {
        drawer() {
        this.isOpen = !this.isOpen;
        },
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ko', options)
        },
    },
    watch: {
        isOpen: {
        immediate: true,
        handler(isOpen) {
            if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
            }
        }
        }
    },
    mounted() {
        document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        });
    },
async asyncData({ $content, params }) {
// 여기(curriculumName)를 수정해주면 돼요!
        const curriculumName = 'nlp';

        const curriname = await $content(curriculumName, params.slug)
        .fetch();

        const currilist = await $content('courses')
        .where({slug: curriculumName})
        .fetch();

        const currititle = currilist[0]["slug"]

        let cats = {}
        for (let i = 1; i<11; i++) {
            cats[`cat_${i}`] = currilist[0]["category"][i-1];
        };

        let lists = {}

        for (let i = 1; i<11; i++) {
            lists[`list_${i}`] = await $content(curriculumName)
            .where({category: cats[`cat_${i}`]})
            .sortBy('slug', 'asc')
            .fetch();
        }

        const [prev, next] = await $content(curriculumName)
        .only(['title', 'slug'])
        .sortBy('slug', 'asc')
        .surround(params.slug)
        .fetch();

        return { curriname, currilist, prev, next, currititle, curriculumName, cats, lists}
    },

    head() {
        return {
            title: `${this.curriname.title} | COSADAMA Curriculum`,
            htmlAttrs: {
            lang: 'ko'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 't-type',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
            hid: 'og-type',
            property: 'og:type',
            content: 'website'
            },
            {
            hid: 'og:title',
            property: 'og:title',
            content: `${this.curriname.title} | COSADAMA Curriculum`
            },
            {
            hid: 'og:image',
            property: 'og:image',
            // content: this.article.img
            content: `https://raw.githubusercontent.com/Team-COSADAMA/Curriculum/main/assets/resources/thumbnails/${this.currititle}.png`
            },
            {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: `https://raw.githubusercontent.com/Team-COSADAMA/Curriculum/main/assets/resources/thumbnails/${this.currititle}.png`
            },
            {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: 'curriculum image'
            },
            {
            hid: 'og:url',
            name: 'og:url',
            content: `https://www.curriculum.cosadama.com/${this.currititle}/${this.$route.params.slug}`
            },
            ],
        }
    },
}
</script>

<style scoped>
.keep-all{
    word-break: keep-all;
}
code::before {
    content: none !important;
}
code::after {
    content: none !important;
}
img{
    margin: auto;
}
.nav-item:hover,
.nav-item:active,
.nav-item.nuxt-link-active {
    color: #3b82f6;
}
</style>