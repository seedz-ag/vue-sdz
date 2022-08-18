// import { required } from 'vuelidate/lib/validators/index.js'
import { required, minLength, email, helpers } from '@vuelidate/validators'

const myRequired = helpers.withMessage('Campo obrigatório.', required)

export default [
  {
    name: 'name',
    icon: 'star',
    component: 'SInput',
    label: 'name',
    placeholder: 'name',
    value: '1111',
    onInput ({ field }) {
      this.$set(this.form, 'nome2', 'dynamic text')
    },
    validate: { required: myRequired, minLength: minLength(5) }
  },

  {
    name: 'inputBtn',
    button: 'editar',
    buttonIcon: 'star',
    component: 'SInput',
    label: 'inputBtn',
    placeholder: 'inputBtn',
    value: '',
    validate: { required },
    onClick ({ field }) {
      this.$emit('click:input-btn')
    },
  },

  [
    {
      name: 'nome2',
      width: '25%',
      component: 'SInput',
      label: 'Nome2',
      placeholder: 'Nome2',
      value: '',
      onInput: ({ field }) => {
        console.log('222222', field)
      },
      validate: { required }
    },
    {
      name: 'email1',
      width: '25%',
      component: 'SInput',
      label: 'E-mail1',
      placeholder: 'E-mail1',
      type: 'email',
      value: '',
      validate: { required, email }
    },
    {
      name: 'nome3',
      width: '50%',
      component: 'SInput',
      label: 'Nome3',
      placeholder: 'Nome3',
      value: '',
      mask: '(##) ####-####'
    }
  ],

  [
    {
      name: 'checkbox1',
      component: 'SCheckbox',
      label: 'Positive',
      placeholder: 'Positive',
      positive: true,
      value: true,
      validate: { required }
    },
    {
      name: 'checkbox2',
      component: 'SCheckbox',
      label: 'Negative',
      placeholder: 'Negative',
      negative: true,
      value: true,
      validate: { required }
    }
  ],

  [
    {
      name: 'radiobox',
      component: 'SRadiobox',
      id: 'sim',
      label: 'radiobox',
      placeholder: 'radiobox',
      value: 'sim'
    },
    {
      name: 'radiobox',
      component: 'SRadiobox',
      id: 'nao',
      label: 'radiobox',
      placeholder: 'radiobox',
      value: 'nao'
    }
  ],

  {
    name: 'textarea',
    component: 'SInput',
    label: 'textarea',
    placeholder: 'textarea',
    textArea: true,
    value: ''
  },

  {
    name: 'switch',
    component: 'SSwitch',
    label: 'switch',
    value: false
  },

  {
    name: 'phone',
    component: 'SInput',
    label: 'phone',
    placeholder: 'phone',
    value: '',
    mask: '(##) ####-####'
  },

  [
    {
      name: 'email1',
      component: 'SInput',
      label: 'email1',
      placeholder: 'email1',
      value: '',
      validate: { required, email }
    },
    {
      name: 'email2',
      component: 'SInput',
      label: 'email2',
      placeholder: 'email2',
      type: 'email',
      value: '',
      validate: { required, email }
    },
  ],

  [
    {
      name: 'states',
      component: 'SSelect',
      label: 'states',
      placeholder: 'states',
      trackBy: 'id',
      displayBy: 'name',
      value: { name: 'sp', id: 2 },
      onInput ({ field }) {
        this.$set(this.form, 'cities', { name: 'cf', id: 2 })
      },
      items: [ { name: 'rj', id: 1 }, { name: 'sp', id: 2 } ]
    },
    {
      name: 'cities',
      component: 'SSelect',
      label: 'cities',
      placeholder: 'cities',
      trackBy: 'id',
      displayBy: 'name',
      value: {},
      items: [ { name: 'bzs', id: 1 }, { name: 'cf', id: 2 } ]
    }
  ]
]
