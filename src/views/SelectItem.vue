<template>
  <div style="margin-top: 20px">
    <a-form :form="form" >
      <a-form-item v-bind="formItemLayout" label="物品名">
        <a-input v-model="Name" placeholder="默认为全选"/>
      </a-form-item>
    </a-form>
    <div style="padding-bottom: 20px;">
      <a-button @click="cancel" style="margin-right: 10px;">取消</a-button>
      <a-button type="primary" @click="save">查询</a-button>
    </div>
    <div id="selectTable">
      <a-spin :spinning="spinning">
        <a-table
                :columns="columns"
                :dataSource="data"
                :rowKey="record => record.id"
                bordered
        >
          <template
                  v-for="col in ['name', 'number', 'borrow','returner','total','price']"
                  :slot="col"
                  slot-scope="text, record"
          >
            <div :key="col">
              <a-input
                      v-if="record.editable"
                      style="margin: -5px 0"
                      :value="text"
                      @change="e => handleChange(e.target.value, record.id, col)"
              />
              <template v-else
              >{{text}}</template
              >
            </div>
          </template>
        </a-table>
      </a-spin>
    </div>
  </div>
</template>

<script>
  import {selectIt} from "../network/select";

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      scopedSlots: { customRender: 'id' },
      fixed: 'left',
      width: 100,
    },
    {
      title: '物品名',
      dataIndex: 'name',
      scopedSlots: { customRender: 'name' },

    },
    {
      title: '数量',
      dataIndex: 'number',
      scopedSlots: { customRender: 'number' },
      width: 90,
    },
    {
      title: '已借出',
      dataIndex: 'borrow',
      width: 120,
      scopedSlots: { customRender: 'borrow' },
    },
    {
      title: '归还',
      dataIndex: 'returner',
      width: 100,
      scopedSlots: { customRender: 'returner' },
    },
    {
      title: '总数',
      dataIndex: 'total',
      width: 100,
      scopedSlots: { customRender: 'total' },
    },
    {
      title: '单价',
      dataIndex: 'price',
      width: 100,
      scopedSlots: { customRender: 'price' },
    },
  ]

  export default {
    name: "selectItem",
    data() {
      return {
        Name: '',
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 10 },
          },
        },
        data: [],
        columns,
        spinning: false
      }
    },
    created() {
      this.save()
    },
    methods: {
      cancel() {
        this.Name = ''
      },
      save() {
        selectIt(this.Name).then(res => {
          console.log(res);
          if(res.data.code ===200) {
            this.data = res.data.data;
            // this.data0 = res.data.data;
            this.spinning = false
          } else {
            this.$message.error(res.data.message);
            this.spinning = false
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  #selectTable {
    margin: 10px;
  }
</style>