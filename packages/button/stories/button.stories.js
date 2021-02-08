import LgButton from '../'


export default {
    title: 'LgButton',
    component: LgButton
}

export const Button = () => ({ // 是对象
    components: { LgButton },
    template: `<lg-button type="primary" @click="login">登 录</lg-button>`,
    methods: {
        login() {
            console.log('按钮')
        }
    }
})