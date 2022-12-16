import { ref } from '../js/vue.esm-browser.js'

export default {
    props: { msg: String },
    template: `
        <article>
            <h2> Article1 - {{msge}} </h2>
            <p> ehdgo anfrhk qorentksdl </p> 
        </article>
    `, setup(props, { emit }) {
        const msge = ref(props.msg)
        emit('response', 'param1', 'param2')
        return {
            msge
        } 
    }
}