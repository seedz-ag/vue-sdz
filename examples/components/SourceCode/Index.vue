<template>
  <div class="source-code">
    <source-code-container :title="structure.title" :subtitle="structure.subtitle">
      <template #header>
        <component :is="currentComponent" v-bind="getObject" v-if="structure"><slot /></component>
      </template>
      <template #content>
        <button class="tab" :class="tab == 'prop'?'active':null" @click="tab = 'prop'">Props</button>
        <button class="tab" :class="tab == 'api'?'active':null" @click="tab = 'api'">API</button>
        <div v-show="tab=='prop'" class="tabprop">
          <div v-for="prop in structure.props" :key="prop.name" class="item">
            <div v-if="prop.values.length<=1">
              <s-input
                small
                :label="prop.name"
                :value="prop.value"
                :placeholder="prop.placeholder"
                @input="value => prop.value = value"
              />
            </div>

            <div v-if="prop.type=='boolean'">
              <label>{{ prop.name }}</label>
              <!-- <s-radio-group :name="prop.name" label="Sim" value="true" @change="e => prop.value = e" />
              <s-radio-group :name="prop.name" label="Não" value="false" @change="e => prop.value = e" /> -->
            </div>

            <div v-if="prop.values.length>1 && prop.type!='boolean'">
              <s-select
                :label="prop.name"
                display="slug"
                display-by="name"
                placeholder="Selecione uma opção"
                small
                :items="prop.values.map(v => ({name:(v||'none'), slug:v}))"
                v-model="prop.value"
              >
                <div slot="option" slot-scope="{ option }">
                  {{ option['name'] }}
                </div>
              </s-select>
            </div>
          </div>
        </div>
        <div v-show="tab=='api'" class="tabapi">
          <table class="table-api">
            <thead>
              <tr>
                <th>Name</th>
                <th>Default</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in structure.props" :key="prop.name">
                <td><code class="codespan">{{ prop.name }}</code></td>
                <td>{{ prop.default }}</td>
                <td>{{ prop.type }}</td>
                <td>{{ prop.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </source-code-container>


    <!--<CodeEditor :read_only="false"
                :wrap_code="true"
                :value="code"
                :display_language="false"
                v-model="code"
    />-->
    <pre-code :code="code" />
  </div>
</template>

<script>

//import CodeEditor from 'simple-code-editor'
import SourceCodeContainer from './components/SourceCodeContainer.vue'
import SInput from '../../../src/components/SInput/Index.vue'
import SSelect from '../../../src/components/SSelect/Index.vue'
import SRadioGroup from '../../../src/components/SRadioGroup/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  name: 'SourceCode',
  components: {
    //CodeEditor,
    SourceCodeContainer,
    SInput,
    SRadioGroup,
    SSelect,
    PreCode
  },
  props: {
    file: { type: String, required: true },
    comp: { type: String, required: true }
  },
  data () {
    return {
      structure: { title: '',subtitle: '',props: [],imports: [] },
      tab: 'prop'
    }
  },
  created () {
    this.loader().then(res => {
      this.structure = JSON.parse(JSON.stringify(res))
    })
  },
  computed: {
    code () {
      let value = ''

      value += `<template>\n\t<${this.renderName(true)}\n`
      //colocar redulce
      this.structure.props.map(e => {
        e.value = e.value || e.default
        if (e.value) {
          let p = this.renderValueProp(e.type, e.value)
          if (e.type == 'prop')
            value += `\t\t${p}\n`
          else if (p != 'false')
            value += `\t\t${e.name}=${p}\n`
        }
      })

      value += '\t/>\n</template>'

      value += this.getScripts()

      return value
    },
    currentComponent () {
      if (!this.comp) return ''
      return () => import('../../../src/components/' + this.comp + '/Index.vue')
    },
    loader () {
      if (!this.file) return ''
      return () => import(`./assets/${this.file}.json`)
    },
    getObject () {

      let data = { items: [] }

      this.structure.props.map(p => {
        p.value = p.value || p.default
        if (!p.value) return data
        if (p.type != 'prop') {
          if (p.type != 'boolean')
            return data[p.name] = (p.type == 'array') ? JSON.parse(p.value) : p.value
          if (p.value == 'true')
            return data[p.name] = true
        }
        const isSelectInput = typeof p.value !== 'string'
        let key = (isSelectInput) ? p.value.slug : p.value
        if (key)
          data[key] = true
      })

      return data
    }
  },

  methods: {
    getScripts () {
      let value = '\n\n<script>\n'
      this.structure.imports.map( i => {
        value += `\timport ${i.as || i.name} from '${i.name}';\n`
      })

      value += `\timport ${this.renderName()} from '${this.structure.component?.name}';\n`

      value += `\n\texport default {\n\t\tname: 'Example',\n\t\tcomponents: {
      \t\t\t${this.renderName(true)}
      \t\t}\n\t}\n<${'/'}script>`

      return value
    },

    renderValueProp (type, value) {
      if (type == 'string' || type == 'array') return `"${value}"`
      if (type == 'object') return `{${value}}`
      return String(value)
    },
    renderName (clear) {
      return this.structure.component
        ? (this.structure.component.as
          ? ((clear) ? this.structure.component.as.replace(/[^a-zA-Z]/g,'').trim() : this.structure.component.as)
          : this.structure.component.name) :
        ''
    }
  }
}
</script>

<style lang="scss">

.source-code > .source-code-container{
  & > .body{
    & > .tab{
      background-color: #FFF;
      padding: 10px 20px;
      color: #222;
      border: none;
      cursor:pointer;
      margin-bottom:10px;
      &:hover{
        background-color:rgba(0,0,0,0.02)
      }
      &.active{
        font-weight:600;
      }
    }

    & > .tabprop{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content:space-around;
      & > .item{
        width: 250px;
        height: 90px;
        text-align: left;
      }
    }

    & > .tabapi > .table-api{
      width:100%;
      background-color:#FFF;
      & > thead > tr{
        & > th{
          padding:10px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
      }
      & > tbody > tr{
        & > td{
          padding:15px 10px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          font-size:13px;
          & > .codespan{
            font-family:Consolas,"courier new";
            font-size:15px;
            color:crimson;
            background-color:#f1f1f1;
            padding:4px;
            border-radius:4px;
          }
        }
        & > tr:nth-child(even) {
          background-color: rgba(0,0,0,0.04);
        }

      }
    }
  }
}

</style>
