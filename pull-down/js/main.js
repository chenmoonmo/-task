Vue.component('viewed',  {
    template: '<div><span>{{name}}</span><img src="images/abandon.png"/></div>',
    props: ['name'],
    methods: {}
});

new Vue({
    el:'#view-option-cnt',
})
