<template>
  <doc-item-card :iconURL="fileIcon[format]" :uid="uid">
    <template slot="count">{{pages}} 页</template>
    <template slot="doc-name">{{name}}</template>
    <template slot="user">{{nickname}}</template>
    <template slot="created">{{created}}</template>
    <template slot="collected">{{collected}}</template>
    <template slot="reviews">
      <div @click.stop="pushFile">
        <i class="el-icon-fa-print"></i>
        打印 {{printed}}
      </div>
    </template>
  </doc-item-card>
</template>

<script>
  import { icons } from '@/assets/img/print'
  import docItemCard from './DocItemCard'
  import { formatDate } from '@/utils/format'
  import { pushFileFormLibrary } from '@/utils/fileHelper'

  export default {
    name: 'file-card',
    components: { docItemCard },
    props: {
      docItem: {
        type: Object,
        required: true
      }
    },
    data () {
      let {
        id, name,
        created, pages, format,
        collected, printed,
        uploader: { uid, nickname }
      } = this.docItem
      return {
        id,
        name,
        created: formatDate(created),
        pages,
        format,
        collected,
        printed,
        uid,
        nickname: nickname || '匿名用户',
        fileIcon: icons
      }
    },
    computed: {},
    watch: {},
    mounted () {},
    methods: {
      async pushFile () {
        let { name, id, format } = this
        await pushFileFormLibrary({ name, id, format })
      }
    }
  }
</script>
