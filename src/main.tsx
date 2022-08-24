import { render } from 'preact'
import { setup, silent } from '@twind/preact'
import * as colors from 'twind/colors'
import { App } from './app'
import './main.css'

setup({
    props: {
        // tw: false, // to disable
        // css: false, // to disable
        className: true, // to enable
    },
    theme: {
        extend: {
            colors,
        },
    },
    mode: silent,
})

document.documentElement.style.scrollBehavior = 'smooth';

const body = document.querySelector('body')
const app = document.createElement('div')
app.id = 'rfc-helper-root'

if (body) {
    body.append(app)
}

render(<App />, document.getElementById(app.id) as HTMLElement)
