<script setup lang="ts">
import { ref } from 'vue';
import BasicDialog from '@/components/dialog/basicDialog.vue';

// 날짜, 시간, 시장 종류(KOSPI, KOSDAQ), 종목, 개수, 매수 금액, 매도 목표
const dialogRef = ref<null | { openDialog: () => null }>(null);
const emit = defineEmits(['saveComplete']);
const openDialog = () => {
    dialogRef.value?.openDialog();
};
const closeDialog = () => {
    console.log('reset');
};
const confirmDialog = () => {
    emit('saveComplete');
};
</script>
<template>
    <v-btn @click="openDialog" color="error" small>매수</v-btn>
    <BasicDialog
        :isShowClose="true"
        :isShowConfirm="true"
        :minWidth="'500px'"
        @close="closeDialog"
        @confirm="confirmDialog"
        ref="dialogRef"
    >
        <template v-slot:contents> 매수/매도 등록 </template>
    </BasicDialog>
</template>
