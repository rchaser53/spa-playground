import ParentA from '../../components/parent/ParentA.vue'
import ParentB from '../../components/parent/ParentB.vue'

export const ParentRoutes = [
  {
    path: '/parentA',
    name: 'parentA-child',
    component: ParentA
  },
  {
    path: '/parentB',
    name: 'parentB-child',
    component: ParentB
  },
]