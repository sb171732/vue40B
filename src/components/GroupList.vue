<template>
    <div class="">
        <table class="w3-table w3-bordered w3-striped">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Курс</th>
                    <th>Возраст</th>
                    <th>Пол</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="g in group_list" :key="g">
                    <td>{{ g.name }}</td>
                    <td>{{ g.kurs }}</td>
                    <td v-if="g.age>19" class="w3-green">{{ g.age }}</td>
                    <td v-else class="w3-red">{{ g.age }}</td>
                    <td>{{ g.pol }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
  export default {
    data(){
        return{
            group_list:[
                { name:'Дима', kurs:4, age:20, pol:'Муж'   },
                { name:'Маадыр', kurs:4, age:19, pol:'Муж'   },
                { name:'Марианна', kurs:4, age:19, pol:'Жен'   },
                { name:'Чаяна', kurs:4, age:20, pol:'Жен'   },

            ]
        }
    }
  }
   
</script>