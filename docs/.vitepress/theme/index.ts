import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './styles.css'
import "./style/index.css"
import MyLayout from './components/MyLayout.vue'


export default {
    extends: Theme,
    Layout: MyLayout,
  }
