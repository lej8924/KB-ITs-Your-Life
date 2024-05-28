<template>
    <center>
        <div>
            <div class="info">상품정보</div>
            <hr>
            <br>
            <table>
                <tr v-bind:product>
                    <th>제품번호</th><td>{{ product.no}}</td>
                </tr>
                <tr>
                    <th>제품이름</th><td>{{ product.name }}</td>
                </tr>
                <tr>
                    <th>제품설명</th><td>{{ product.desc }}</td>
                </tr>
                <tr>
                    <th>제품가격</th><td>{{ product.price }}</td>
                </tr>
                <tr>
                    <th>제품회사</th><td>{{ product.company }}</td>
                </tr>
                <tr>
                    <th>제품이미지</th><td><img v-bind:src="product.image"></td>
                </tr>
            </table>
            <img v-bind:src="bottom">
        </div>
    </center>
    
</template>

<script>
    export default {
        name:"ProductBox",
        data(){
            return{
                "product" : {"no":"100","name":"shoes1",desc:"fun shoes1",price:1000,company:"c100",image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMTRfODIg%2FMDAxNzA1MjQwODk2NTc2.aKCLz-ne5J5qjr_XvxKeqycZ8nhd3nCG6OatyjJuZjQg.9Mp_uxPaqYvjp7sD282ekPto6NsRkyNI4y6f0c11l-Mg.JPEG.g12yong%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5.jpeg&type=a340"},
                "bottom-img" : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMjY2%2FMDAxNzA1OTE2NTQ2ODkw.J4sY4j2qEG2C46g_VRtzCjMMIEqVdk7s0ipZtZfXGKYg.SKUo6AB_zu8C4nqf5K_zkG06c2y0y3P74jmEdzXSR6Eg.JPEG.rkwkrhrhrh%2FIMG_5944.JPG&type=a340",
                bottom : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjBfMjIz%2FMDAxNzEzNTQ2NTg0ODAw.FEFR5n9oY7Z5uBmxyaE2rSYV-Ru07CZ3fEkYYHqFxaYg.ctzATKCUtNM71kqjYObczxVHzgPWm4NgKK6Rq-_9Gycg.PNG%2Fimage.png&type=a340"
            }
        }
    }
</script>

<style scoped>
    td{
        text-align: center;
    }
    th{
        padding-left:10px;
        padding-right: 10px;
    }
    table,td,th{
        border:1px solid black;
        border-collapse: collapse;
    }
    .info{
        margin-bottom: 5px;
        height:100px;
        width: auto;
        background-color: blanchedalmond;
        padding-top: 40px;
        font-weight: bold;
    }
</style>