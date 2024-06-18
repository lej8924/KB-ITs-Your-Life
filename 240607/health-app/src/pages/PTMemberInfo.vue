<template>
    <div>
        <h1 style="color:blue">PT 이용 회원정보</h1>
        <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">회원 ID</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="memberStore.member_id">
            </div>
          </div>
        <div class="mb-3 row">
            <label for="staticPassword" class="col-sm-2 col-form-label">회원 PW</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="memberStore.member_pw">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label">회원 이름</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticName" :value="memberStore.member_name">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="staticAddr" class="col-sm-2 col-form-label">회원 주소</label>
            <div class="col-sm-10">
                <input type="text"  class="form-control" id="staticAddr" v-model="memberStore.member_addr">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="staticTel" class="col-sm-2 col-form-label">회원 전화</label>
            <div class="col-sm-10">
                <input type="text"  class="form-control" id="staticTel" v-model="memberStore.member_tel">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useMemberStore } from '@/stores/member';

    const memberStore = useMemberStore();
</script>

