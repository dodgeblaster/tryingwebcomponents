import '../components/base/Button.js'
import { TestUtils } from './util.js'

async function test() {
    const { shadowRoot } = await TestUtils.render('gj-button')
    if (shadowRoot.innerHTML.includes('hello')) {
        document.body.innerHTML = /* HTML */ `
            <div class="h-screen w-full flex items-center justify-center">
                <div
                    class="mx-2 py-2 rounded bg-green-600 text-white px-4 py-1"
                >
                    All tests passed!
                </div>
            </div>
        `
    } else {
        document.body.innerHTML = /* HTML */ `
            <div class="h-screen w-full flex items-center justify-center">
                <div class="mx-2 py-2 rounded bg-red-600 text-white px-4 py-1">
                    Button test failed!
                </div>
            </div>
        `
    }
}

test()
