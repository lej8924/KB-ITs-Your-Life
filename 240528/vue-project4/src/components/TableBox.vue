<template>
    <table>
        <tr>
            <th>name</th>
            <td>{{ name }}</td>
        </tr>
        <tr>
            <th>age</th>
            <td>{{ age }}</td>
        </tr>
        <tr>
            <th>gender</th>
            <td>{{ gender }}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name:"TableBox",
        data() {
            return{
                name:"kim baby",
                age:1,
                gender: "woman"
            }
        }
    }
    
</script>

<style scoped>
    table,td{
        text-align: center;
        width:300px;
        border:1px solid black;
        border-collapse: collapse;
    }
    th{
        padding:5px 10px 5px 10px;
        background-color: hotpink;
    }
    td{
      padding:5px 20px 5px 20px;  
    }
</style>