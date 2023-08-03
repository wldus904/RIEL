<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import BasicDialog from '@/components/dialog/basicDialog.vue';
const dialogRef = ref<null | { openDialog: () => null }>(null);
const openDialog = () => {
    dialogRef.value?.openDialog();
};
const closeDialog = () => {
    console.log('closeDialog');
};
const confirmDialog = () => {
    console.log('confirmDialog');
};
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Sample Page">
                <div class="pa-7 pt-1"><p class="text-body-1">매수/매도</p></div>
            </UiParentCard>
            <v-btn @click="openDialog">열기</v-btn>
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
        </v-col>
    </v-row>
</template>
