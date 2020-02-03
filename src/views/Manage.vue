<template>
  <div id="meterial">
    <!--添加按钮功能-->
    <div id="addBar">
      <a-button type="primary" @click="showModal">添加</a-button>
      <a-modal
              title="添加物资"
              :visible="visible"
              cancelText="取消"
              okText="确定"
              @ok="handleOk"
              :confirmLoading="confirmLoading"
              @cancel="handleCancel"
      >
        <a-form >
          <a-form-item v-bind="formItemLayout" label="物品名">
            <a-input v-model="addName" :disabled="inputDisabled" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="数量">
            <a-input v-model="addNumber" :disabled="inputDisabled" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="已借出">
            <a-input v-model="addBorrow" :disabled="inputDisabled" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="归还">
            <a-input v-model="addReturner" :disabled="inputDisabled" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="总数">
            <a-input v-model="addTotal" :disabled="inputDisabled" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="单价">
            <a-input v-model="addPrice" :disabled="inputDisabled" />
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <div id="studentsTable">
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

          <template slot="operation" slot-scope="text, record">
            <div class="editable-row-operations">
              <span v-if="record.editable">
                <a-button @click="() => save(record.id)" size="small">保存</a-button>&nbsp;
                <a-popconfirm
                  title="确认取消?"
                  @confirm="() => cancel(record.id)"
                  okText="确定"
                  cancelText="取消">
                  <a-button  size="small">取消</a-button>
                </a-popconfirm>
              </span>
              <span v-else>
                <a-button @click="() => edit(record.id)" size="small">编辑</a-button>&nbsp;
                <a-popconfirm
                        title="确认删除?"
                        @confirm="() => onDelete(record.id)"
                        okText="确定"
                        cancelText="取消">
                  <a-button  type="danger" size="small">删除</a-button>
                </a-popconfirm>
              </span>
            </div>
          </template>
        </a-table>
      </a-spin>
    </div>
  </div>

</template>

<script>

  import {getMaterial} from "../network/getMaterial";
  import {updateMaterial} from "../network/updateMaterial";
  import {deleteItem} from "../network/deleteItem";
  import {addItem} from "../network/addItem";

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      scopedSlots: { customRender: 'id' },
      fixed: 'left',
      width: 80,
    },
    {
      title: '物品名',
      dataIndex: 'name',
      scopedSlots: { customRender: 'name' },
      width: 140,
    },
    {
      title: '数量',
      dataIndex: 'number',
      scopedSlots: { customRender: 'number' },
      width: 90,
      sorter: (a, b) => a.number - b.number
    },
    {
      title: '已借出',
      dataIndex: 'borrow',
      width: 140,
      scopedSlots: { customRender: 'borrow' },
      sorter: (a, b) => a.borrow - b.borrow
    },
    {
      title: '归还',
      dataIndex: 'returner',
      scopedSlots: { customRender: 'returner' },
      sorter: (a, b) => a.returner - b.returner
    },
    {
      title: '总数',
      dataIndex: 'total',
      width: 100,
      scopedSlots: { customRender: 'total' },
      sorter: (a, b) => a.total - b.total
    },
    {
      title: '单价',
      dataIndex: 'price',
      width: 100,
      scopedSlots: { customRender: 'price' },
      sorter: (a, b) => a.price - b.price
    },
    {
      title: '操作',
      dataIndex: 'operation',
      scopedSlots: {customRender: 'operation'},
      fixed: 'right',
      width: 160,
    }
  ]

  export default {
    name: "Material",
    data() {

      return {
        data0: [],
        data: [],
        columns,
        spinning: false,
        visible: false,
        confirmLoading: false,
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
        addName: '',
        addNumber: '',
        addBorrow: '',
        addReturner: '',
        addTotal: '',
        addPrice: '',
        inputDisabled: false
      }
    },
    created() {
      this.getAllMaterial()
      // this.data0 = this.data.map(item => ({ ...item }));
    },
    methods: {
      //添加按钮
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.inputDisabled = true;
        this.confirmLoading = true;
        addItem(this.addName,
            this.addNumber,
            this.addBorrow,
            this.addReturner,
            this.addTotal,
            this.addPrice).then(res => {
          console.log(res);
          if (res.data.code === 200) {
            // console.log("成功");
            this.visible = false;
            this.confirmLoading = false;
            this.$message.success("添加成功");
            this.getAllMaterial()
          } else {
            this.confirmLoading = false;
            this.inputDisabled = false;
            this.$message.error("信息格式错误");
          }
        }).catch(err => {
          this.confirmLoading = false;
          this.inputDisabled = false;
          this.$message.error("响应失败");
        })
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },


      //网络请求
      getAllMaterial() {
        this.spinning = true
        getMaterial().then(res => {
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
      },



      //表格信息变化
      handleChange(value, id, column) {
        const newData = [...this.data];
        const target = newData.filter(item => id === item.id)[0];
        if (target) {
          target[column] = value;
          this.data = newData;
        }
      },
      edit(id) {
        const newData = [...this.data];
        const target = newData.filter(item => id === item.id)[0];
        if (target) {
          target.editable = true;
          this.data = newData;
        }
      },
      save(id) {
        const newData = [...this.data];
        const target = newData.filter(item => id === item.id)[0];
        if (target) {
          delete target.editable;
          this.data = newData;
          this.data0 = newData.map(item => ({ ...item }));
        }

        //上传数据
        let index = id -1 ;
        console.log(this.data[index].id);
        console.log(this.data[index].name);
        updateMaterial(
            this.data[index].id,
            this.data[index].name,
            this.data[index].number,
            this.data[index].borrow,
            this.data[index].returner,
            this.data[index].total,
            this.data[index].price).then(res => {
          //响应成功
          if (res.data.code === 200) {
            this.$message.success("修改成功")
          } else {
            this.$message.success("修改失败")
          }
        }).catch(err => {
          this.$message.success("修改失败")
        })
      },
      cancel(id) {
        const newData = [...this.data];
        const target = newData.filter(item => id === item.id)[0];
        if (target) {
          Object.assign(target, this.data0.filter(item => id === item.id)[0]);
          delete target.editable;
          this.data = newData;
        }
      },
      onDelete(id) {
        const dataSource = [...this.data];
        this.data = dataSource.filter(item => item.id !== id);
        const index = id - 1;
        deleteItem(index.toString()).then(res => {
          console.log(res);
          if(res.data.code === 200) {
            this.$message.success("删除成功");
          }
        })
      },



    }

  }
</script>

<style scoped>
  #studentsTable {
    padding: 20px;
    padding-top: 0px;
  }

  #addBar {
    text-align: left;
    margin: 20px;
    margin-top: 30px;
  }
</style>