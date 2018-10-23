import './css/index.css'
import Toast from './js/index.js'

export default function toast(text, options) {
    return new Toast(text, options);
}