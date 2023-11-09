<template>
    <div>
        <h2>Блокнот</h2>
        {{ list }} , {{  selected_index }}
        <el-row>
            <el-col class="w3-border" :span="12" style="height: 400px;">
                <el-input
                    type="textarea"
                    :rows="10"
                    placeholder="введите текст .."
                    v-model="textarea">
                </el-input>
                <hr>
                <el-button @click="add()">add</el-button>
                <el-button @click="upd()">update</el-button>
            </el-col>
            <el-col class="w3-border" :span="12" style="height: 400px;">
                <div class="">
                      <ol>
                        <li v-for="(l,index) in list" :key="index">
                           {{ l.name }} <br>
                           <el-button type="text" @click="edit(index)">редактировать</el-button>
                           <hr>
                        </li>
                      </ol>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
   data(){
    return {
        textarea:'',
        list:[
            
        ],
        selected_index:''
    }
   },
   methods:{
    add(){
        this.list.push({ name:  this.textarea })
        this.textarea = ''    
    },
    edit(i){
      this.selected_index = i
      this.textarea = this.list[i].name
    },
    upd(){
        console.log(this.list[parseInt(this.selected_index)])
        console.log(this.textarea)
        this.list[parseInt(this.selected_index)].name = this.textarea
    }
   },
  
}
</script>

<style>

</style>