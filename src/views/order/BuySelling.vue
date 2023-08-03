<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import Selling from '@/components/order/Selling.vue';

const getList = () => {
    console.log('getList');
};
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Sample Page">
                <div class="pa-7 pt-1"><p class="text-body-1">매수/매도</p></div>
            </UiParentCard>
            <Selling @saveComplete="getList" />
        </v-col>
    </v-row>
</template>
