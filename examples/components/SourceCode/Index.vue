<template>
  <div>
    <container :title="structure.title" :subtitle="structure.subtitle">
      <template #header>
        <component :is="currentComponent" :get-prop="getProp" v-bind="getObject" />
      </template>
      <template #content>
        <div v-for="prop in structure.props" :key="prop.name" class="item">
          <div v-if="prop.values.length<=1">
            <s-input
              small
              :label="prop.name"
              :value="prop.default"
              :placeholder="prop.placeholder"
              @input="value => prop.default = value"
            />
          </div>

          <div v-if="prop.type=='boolean'">
            <label>{{ prop.name }}</label>
            <s-radiobox :name="prop.name" label="Sim" :value="prop.values[0]" @change="e => prop.default = e" />
            <s-radiobox :name="prop.name" label="Não" :value="prop.values[1]" @change="e => prop.default = e" />
          </div>

          <div v-if="prop.values.length>1 && prop.type!='boolean'">
            <s-select
              :label="prop.name"
              display="slug"
              display-by="name"
              placeholder="Selecione uma opção"
              small
              :items="prop.values.map(v => ({name:v||'none', slug:v}))"
              v-model="prop.default"
            >
              <div slot="option" slot-scope="{ option }">
                {{ option['name'] }}
              </div>
            </s-select>
          </div>
        </div>
      </template>
    </container>


    <!--<CodeEditor :read_only="false" 
                :wrap_code="true" 
                :value="code"
                :display_language="false"
                v-model="code"
    />-->
    <pre class="pre">
      <code>{{ code }}</code>
    </pre>
  </div>
</template>

<script>

//import CodeEditor from 'simple-code-editor'
import Container from './components/Container.vue'
import SInput from '../../../src/components/SInput/Index.vue'
import SSelect from '../../../src/components/SSelect/Index.vue'
import SRadiobox from '../../../src/components/SRadiobox/Index.vue'

export default {
  name: 'SourceCode',
  components: {
    //CodeEditor,
    Container,
    SInput,
    SRadiobox,
    SSelect
  },
  props:{
    file: {type: String, required: true},
    comp: {type: String, required: true}
  },
  data() {
    return{
      structure: {title:'',subtitle:'',props:[],imports:[]}
    }
  },
  created() {
    this.loader().then(res => {
      this.structure = JSON.parse(JSON.stringify(res));
    })
  },
  computed:{
    getObject(){
      return {label:'teste', placeholder:'place teste'}
    },
    code() {
      let value = ''
      
      value +=`<template>\n\t<${this.renderName(true)}\n`;
      
      this.structure.props.map(e => {
        if(e.default.length){
          let p = this.renderValueProp(e.type, e.default)
          if(e.type == 'prop')
            value += `\t\t${p}\n`
          else if(p!='false')
            value += `\t\t${e.name}=${p}\n`
        }
      })
 
      value += '\t/>\n</template>';

      value += this.getScripts()

      return value;
    },
    currentComponent () {
      if (this.comp) {
        return () => import('../../../src/components/' + this.comp + '/Index.vue')
      }
      return ''
    },
    loader() {
      return () => import(`./assets/${this.file}.json`);
    },
  },
  
  methods: {
    getScripts() {
      let value = '\n\n<script>\n'
      this.structure.imports.map( i => {
        value += `\timport ${i.as || i.name} from '${i.name}';\n`
      })

      value += `\timport ${this.renderName()} from '${this.structure.component?.name}';\n`

      value += `\n\texport default {\n\t\tname: 'Example',\n\t\tcomponents: {
      \t\t\t${this.renderName(true)}
      \t\t}\n\t}\n<${'/'}script>`;
    
      return value;
    },

    renderValueProp(type, value){
      if(type == 'string') return `"${value}"`;
      if(type == 'object') return `{${value}}`;
      return String(value);
    },
    getProp(name, value){

      let r = this.structure.props.filter(p => p.name == name)

      if(r.length>0)
        r = r[0].default;
      else return ''

      if(value)
        r = (r==value)
      
      return r;
    },
    
    renderName(clear){
      return this.structure.component?(this.structure.component.as?((clear)?this.structure.component.as.replace(/[^a-zA-Z]/g,'').trim():this.structure.component.as):this.structure.component.name):''
    }
  }
}
</script>

<style scoped lang="scss">

.item{
  width: 250px;
  height: 90px;
  text-align: left;
}

.pre{
  border-radius: 12px;
  font-size: 17px;
  color:#abb2bf;
  code{
    background-color:#282c34;
    padding:20px;
    width: 600px;
    height: auto;
    border-radius: 12px;
    box-sizing: border-box;
    display: block;
    border: none;
    margin: 0;
  }
}

</style>
