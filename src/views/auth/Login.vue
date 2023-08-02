<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
/**
    1. 매수 기록
        - 매수 등록 : 날짜, 시간, 시장 종류(KOSPI, KOSDAQ), 종목, 개수, 매수 금액, 매도 목표
    2. 매도 기록
        - 매도 등록 : 매도 회차, 날짜, 시간, 매도 개수, 매도 금액, 수수료, 차익 금액, 차익 퍼센트
    3. 매수 매도 조회
        - 매수 조회 : 순서, 매수 회차, 매수 날짜, 매수 시간, 시장 종류(KOSPI, KOSDAQ), 종목, 매수 개수, 개당 매수 금액, 총 매수 금액, 매도 목표, 매도 목표(수수료 포함), 매도 버튼
        - 매도 조회 : 순서, 매도 회차, 매도 날짜, 매도 시간, 매도 개수, 개당 매도 금액, 총 매도 금액, 수수료, 총 수수료, 개당 차익, 총 차익
        - 검색 : 기간, 시장 종류, 종목, 매도 완료 제외
        - 총액 : 매도 수수료, 총 수익, 총 수익률, 투자 금액
    4. 주가 분석
        - 분야 분석 : 분야별 TOP 5 차트 동향, 분야별 TOP 5 매수/매도 동향, 뉴스 키워드, 코스피 분석(평균)
        - 종목 분석 : 차트 동향, 매수/매도 동향, 뉴스 키워드,
    5. 수수료 관리
        - 매수/매도 수수료
    6. 자산 관리
        - 기간별 투자 원금(표, 차트)
        - 기간별 투자 이익(표, 차트)
        - 기간별 총 자산(표, 차트)
        - 기간별 매수/매도 건수(표, 차트)
        - 기간별, 종목별 투자 금액(표, 차트)
        - 기간별, 종목별 차익(표, 차트)
    */
</script>
<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <Logo />
                            </div>
                            <div class="text-body-1 text-muted text-center mb-3">Your Social Campaigns</div>
                            <LoginForm />
                            <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                                New to Modernize?
                                <RouterLink
                                    to="/auth/register"
                                    class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                                >
                                    Create an account</RouterLink
                                >
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
