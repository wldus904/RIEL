<script setup lang="ts">
import { ref, reactive } from 'vue';
interface basicDialogItems {
    isShowClose?: Boolean;
    isShowConfirm?: Boolean;
    closeName?: String;
    confirmName?: String;
    minWidth?: string;
    maxWidth?: string;
    width?: string;
}

const props = defineProps<basicDialogItems>();
const emit = defineEmits(['close', 'confirm']);
const isShowDialog = ref(false);
const openDialog = () => {
    isShowDialog.value = true;
};
const closeDialog = () => {
    emit('close');
    isShowDialog.value = false;
};
const confirmDialog = () => {
    emit('confirm');
    isShowDialog.value = false;
};

defineExpose({
    openDialog,
    closeDialog
});
</script>
<template>
    <v-dialog v-model="isShowDialog" :width="props.width ?? 'auto'" :min-width="props.minWidth" :max-width="props.maxWidth">
        <v-card>
            <v-card-text>
                <slot name="contents"></slot>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
                <v-btn v-if="props.isShowClose" @click="closeDialog" color="muted">{{ props.closeName ?? '취소' }}</v-btn>
                <v-btn v-if="props.isShowConfirm" @click="confirmDialog" color="primary">{{ props.confirmName ?? '확인' }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
